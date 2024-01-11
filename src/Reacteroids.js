import React, { Component } from "react";
import Ship from "./Ship";
import Asteroid from "./Asteroid";
import {
  randomNumBetweenExcluding,
  randomNumBetween,
  shuffleArray,
} from "./helpers";
import { $primary, $secondary } from "./themes";
import {
  EducationalContents,
  element,
} from "./components/educational-contents/educational-contents";

import Lifes from "./components/lifes/lifes";
import GameModal from "./components/Modal/game-modal";
import CreditsModal from "./components/Modal/customModal";
import SocialSidebar from './components/social/social-sidebar';

const KEY = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  A: 65,
  D: 68,
  W: 87,
  SPACE: 32,
};

export default class Reacteroids extends Component {
  constructor() {
    super();
    this.state = {
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1,
      },
      context: null,
      keys: {
        left: 0,
        right: 0,
        up: 0,
        down: 0,
        space: 0,
      },
      asteroidCount: 6,
      currentScore: 0,
      topScore: localStorage["topscore"] || 0,
      inGame: false,
      velocity: 2,
      increment: 3,
      levelCount: 1,
      life: 5,
      nextLevelHandler: false,
      shipBorderColor: "#D0F5FF",
      isModalOpen: true,
      isCreditsModalOpen: false,
      showEducationModal: false,
      audioVolume: 0.3,
      pause: false,
    };
    this.ship = [];
    this.asteroids = [];
    this.bullets = [];
    this.particles = [];
    //this.messageIndex = element;
    this.messageIndexToLoop = [];
    this.i = 0;
  }

  handleChangeCredits = () => {
    this.setState({
      isCreditsModalOpen: false,
      pause: false,
    });
  };

  handleChange = () => {
    this.setState({
      isModalOpen: false,
      isCreditsModalOpen: false,
      pause: false,
    });
    this.startGame();
    this.setState({
      isModalOpen: true,
    });
  };

  handleResize(value, e) {
    this.setState({
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1,
      },
    });
  }

  handleKeys(value, e) {
    let keys = this.state.keys;
    if (e.keyCode === KEY.LEFT || e.keyCode === KEY.A) keys.left = value;
    if (e.keyCode === KEY.RIGHT || e.keyCode === KEY.D) keys.right = value;
    if (e.keyCode === KEY.UP || e.keyCode === KEY.W) keys.up = value;
    if (e.keyCode === KEY.SPACE) {
      keys.space = value;
    }

    this.setState({
      keys: keys,
    });
  }

  componentDidMount() {
    // audio control
    var audio = document.getElementById("myaudio");
    audio.volume = this.state.audioVolume;
    audio.load();
    audio.play();

    //messaggi informativi
    this.messageIndexToLoop = [...Array(element.length).keys()];
    var p1 = this.messageIndexToLoop.slice(0, 3);
    var p2 = this.messageIndexToLoop.slice(3);
    this.messageIndexToLoop = shuffleArray(p2);
    p1 = p1.reverse();
    p1.forEach((element) => {
      this.messageIndexToLoop.unshift(element);
    });

    //eventi muovere e sparare
    window.addEventListener("keyup", this.handleKeys.bind(this, false));
    window.addEventListener("keydown", this.handleKeys.bind(this, true));
    window.addEventListener("resize", this.handleResize.bind(this, false));

    // creazione contesto canvas
    const context = this.refs.canvas.getContext("2d");
    this.setState({ context: context });

    //avviamo il gioco
    this.startGame();
    requestAnimationFrame(() => {
      this.update();
    });
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeys);
    window.removeEventListener("keydown", this.handleKeys);
    window.removeEventListener("resize", this.handleResize);
  }

  update() {
    if (!this.state.pause) {
      const context = this.state.context;
      // const keys = this.state.keys;
      // const ship = this.ship[0];
      context.save();
      context.scale(this.state.screen.ratio, this.state.screen.ratio);

      // Motion trail
      context.fillStyle = $primary;
      context.fillRect(0, 0, this.state.screen.width, this.state.screen.height);
      context.globalAlpha = 1;

      // Next set of asteroids
      if (this.asteroids.length < 1 && this.state.currentScore > 0) {
        this.setState({
          showEducationModal: true,
        });

        //fino al livello 6
        if (this.state.nextLevelHandler && this.state.levelCount <= 5) {
          let count = this.state.asteroidCount + this.state.increment;
          this.setState({ asteroidCount: count });
          this.generateAsteroids(count);
          this.setState({
            levelCount: this.state.levelCount + 1,
            increment: this.state.increment * 1.3,
            velocity: this.state.velocity * 1.1,
            nextLevelHandler: false,
            showEducationModal: false,
          });
        }
        //dal livello 7
        if (this.state.nextLevelHandler && this.state.levelCount > 5) {
          let count = this.state.asteroidCount + this.state.increment;
          this.setState({ asteroidCount: count });
          this.generateAsteroids(count);
          this.setState({
            levelCount: this.state.levelCount + 1,
            increment: this.state.increment * 1.3,
            nextLevelHandler: false,
            showEducationModal: false,
          });
        }
      }

      // Check for colisions
      this.checkCollisionsWith(this.bullets, this.asteroids);
      this.checkCollisionsWith(this.ship, this.asteroids);

      // Remove or render
      this.updateObjects(this.particles, "particles");
      this.updateObjects(this.asteroids, "asteroids");
      this.updateObjects(this.bullets, "bullets");
      this.updateObjects(this.ship, "ship");

      context.restore();
    }
    // Next frame
    requestAnimationFrame(() => {
      this.update();
    });
  }

  addScore(points) {
    if (this.state.inGame) {
      this.setState({
        currentScore: this.state.currentScore + points,
      });
    }
  }

  startGame() {
    console.log("start");
    this.setState({
      inGame: true,
      showEducationModal: false,
      currentScore: 0,
      velocity: 2,
      increment: 3,
      levelCount: 1,
      life: 5,
      asteroidCount: 6,
    });

    // Make ship
    let ship = new Ship({
      position: {
        x: this.state.screen.width / 2,
        y: this.state.screen.height / 2,
      },
      create: this.createObject.bind(this),
      onDie: this.gameOver.bind(this),
      shipBorderColor: this.state.shipBorderColor,
    });
    this.createObject(ship, "ship");

    // Make asteroids
    this.asteroids = [];

    this.generateAsteroids(this.state.asteroidCount);
    // console.log(this.asteroids)
  }

  gameOver() {
    console.log("game over");
    this.setState({
      inGame: false,
      // velocity: 2,
      // increment: 3,
      // levelCount: 1,
      // life: 5,
      // asteroidCount: 6,
    });
    // Replace top score
    if (this.state.currentScore > this.state.topScore) {
      this.setState({
        topScore: this.state.currentScore,
      });
      localStorage["topscore"] = this.state.currentScore;
    }
    this.asteroids = [];
    this.ship = [];
  }

  generateAsteroids(howMany) {
    // let asteroids = [];
    let ship = this.ship[0];

    for (let i = 0; i < howMany; i++) {
      if (typeof ship !== "undefined") {
        let asteroid = new Asteroid({
          size: 40,
          position: {
            x: randomNumBetweenExcluding(
              0,
              this.state.screen.width,
              ship.position.x - 60,
              ship.position.x + 60
            ),
            y: randomNumBetweenExcluding(
              0,
              this.state.screen.height,
              ship.position.y - 60,
              ship.position.y + 60
            ),
          },
          velocity: {
            x: randomNumBetween(-this.state.velocity, this.state.velocity),
            y: randomNumBetween(-this.state.velocity, this.state.velocity),
          },
          create: this.createObject.bind(this),
          addScore: this.addScore.bind(this),
        });
        this.createObject(asteroid, "asteroids");
      }
    }
  }

  createObject(item, group) {
    this[group].push(item);
  }

  updateObjects(items, group) {
    let index = 0;
    for (let item of items) {
      if (item.delete) {
        this[group].splice(index, 1);
      } else {
        items[index].render(this.state);
      }
      index++;
    }
  }

  checkCollisionsWith(items1, items2) {
    var a = items1.length - 1;
    var b;
    for (a; a > -1; --a) {
      b = items2.length - 1;
      for (b; b > -1; --b) {
        var item1 = items1[a];
        var item2 = items2[b];
        if (this.checkCollision(item1, item2)) {
          //check if is shhip to collide with virus
          if (item1.name === "ship") {
            if (this.state.life > 1) {
              this.setState({
                life: this.state.life - 1,
                currentScore: this.state.currentScore - item2.score,
              });
              item1.shipBorderColor = "red";
              let shipBorderColor = this.state.shipBorderColor;
              setTimeout(function () {
                item1.shipBorderColor = shipBorderColor;
              }, 2500);
            } else {
              this.setState({
                life: this.state.life - 1,
              });
              item1.destroy();
            }
          } else {
            item1.destroy();
          }
          item2.destroy();
        }
      }
    }
  }

  checkCollision(obj1, obj2) {
    var vx = obj1.position.x - obj2.position.x;
    var vy = obj1.position.y - obj2.position.y;
    var length = Math.sqrt(vx * vx + vy * vy);
    if (length < obj1.radius + obj2.radius) {
      return true;
    }
    return false;
  }

  render() {
    let endgame;
    let message;
    let educationalModal;

    if (this.state.currentScore <= 0) {
      message = "0 points... So sad.";
    } else if (this.state.currentScore >= this.state.topScore) {
      message = "Top score with " + this.state.currentScore + " points. Woo!";
    } else {
      message = this.state.currentScore + " Points though :)";
    }
    if (!this.state.inGame) {
      endgame = (
        <GameModal
          onClick={this.handleChange}
          show={this.state.isModalOpen}
          title={"Game Over"}
        />
      );
    }

    if (this.state.showEducationModal && this.state.levelCount < 9) {
      educationalModal = (
        <div className="educational-modal">
          <EducationalContents index={this.messageIndexToLoop[this.i]} />
          <button
            onClick={() => {
              this.setState({ nextLevelHandler: true });
              this.i = this.i + 1;
            }}
          >
            <b>Prossimo livello</b>
          </button>
        </div>
      );
    }

    if (this.state.showEducationModal && this.state.levelCount === 9) {
      educationalModal = (
        <GameModal
          onClick={this.handleChange}
          show={this.state.isModalOpen}
          title={"Vittoria"}
        />
      );
    }

    return (
      <div>
        {endgame}
        {educationalModal}
        <CreditsModal
          show={this.state.isCreditsModalOpen}
          onClick={this.handleChangeCredits}
        />
        <span className="score current-score">
          Score: {this.state.currentScore}
        </span>
        <span className="score top-score">
          Top Score: {this.state.topScore}
        </span>
        <span className="level-count">Level: {this.state.levelCount}</span>
        <span className="life-count score">
          <Lifes lifes={this.state.life} />
        </span>
        <SocialSidebar />
        <span className="credits-game">
          <a
            onClick={() =>
              this.setState({ isCreditsModalOpen: true, pause: true })
            }
          >
            Credits
          </a>
        </span>
        <div className="instructions">
          <span>
            Shoot:{" "}
            <img width="180" src={require("./assets/img/Shoot.png")}></img>
          </span>{" "}
          <br />
          <span>
            move: <img src={require("./assets/img/left Arrow.png")}></img>
            <img src={require("./assets/img/up Arrow.png")}></img>
            <img src={require("./assets/img/right Arrow.png")}></img>
            <img src={require("./assets/img/down Arrow.png")}></img>
          </span>
        </div>

        <canvas
          id="mycanvas"
          ref="canvas"
          width={this.state.screen.width * this.state.screen.ratio}
          height={this.state.screen.height * this.state.screen.ratio}
        />
        <audio
          id="myaudio"
          src={require("./assets/audio/Chiptronical.mp3")}
          type="audio/mp3"
          autoPlay
          loop
        />
      </div>
    );
  }
}
