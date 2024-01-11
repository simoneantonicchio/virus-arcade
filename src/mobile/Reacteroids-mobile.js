import React, { Component } from "react";
import Ship from "../Ship";
import Asteroid from "../Asteroid";
import {
  randomNumBetweenExcluding,
  randomNumBetween,
  shuffleArray,
} from "../helpers";
import { $primary, $secondary } from "../themes";
import {
  EducationalContents,
  element,
} from "../components/educational-contents/educational-contents";

import Lifes from "../components/lifes/lifes";
import GameModal from "../components/Modal/game-modal";
import CreditsModal from "../components/Modal/customModal";
import "./Reacteroids-mobile.scss";
import { isIOS} from "react-device-detect";
import SocialSidebar from '../components/social/social-sidebar';

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
      asteroidCount: 1,
      currentScore: 0,
      nextLevelScore: 100,
      topScore: localStorage["topscore"] || 0,
      inGame: false,
      velocity: 5,
      decrement: 100,
      levelCount: 1,
      life: 5,
      nextLevelHandler: false,
      shipBorderColor: "#D0F5FF",
      isModalOpen: true,
      isCreditsModalOpen: false,
      showEducationModal: false,
      audioVolume: 0.3,
      pause: false,
      virusSize: 40,
      timeInterval: 2000,
      isButtonDisabled: false,
    };
    this.ship = [];
    this.asteroids = [];
    this.bullets = [];
    this.particles = [];
    //this.messageIndex = element;
    this.messageIndexToLoop = [];
    this.i = 0;
    this.nextVirusTiming = null;
    // this.addVirus = this.addVirus.bind(this)
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
    console.log(this.state.screen);
  }

  componentDidMount() {
    window.oncontextmenu = function (event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    };

    // audio control
    var audio = document.getElementById("myaudio");
    audio.volume = this.state.audioVolume;
    audio.load();
    audio.play();

    // enable vibration support
    navigator.vibrate =
      navigator.vibrate ||
      navigator.webkitVibrate ||
      navigator.mozVibrate ||
      navigator.msVibrate;

    //messaggi informativi
    this.messageIndexToLoop = [...Array(element.length).keys()];
    var p1 = this.messageIndexToLoop.slice(0, 3);
    var p2 = this.messageIndexToLoop.slice(3);
    this.messageIndexToLoop = shuffleArray(p2);
    p1 = p1.reverse();
    p1.forEach((element) => {
      this.messageIndexToLoop.unshift(element);
    });

    // creazione contesto canvas
    const context = this.refs.canvas.getContext("2d");
    this.setState({ context: context });

    window.addEventListener("resize", this.handleResize.bind(this, false));

    //avviamo il gioco
    this.startGame();

    //instance first next virus timing
    this.nextVirusTiming = setInterval(() => {
      this.generateAsteroids(1);
    }, this.state.timeInterval);

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

      // // Next set of asteroids
      if (this.state.currentScore >= this.state.nextLevelScore) {
        clearInterval(this.nextVirusTiming);
        let decrement = this.state.decrement + 100;
        this.setState({
          showEducationModal: true,
          pause: true,
          nextLevelScore:
            this.state.nextLevelScore + (this.state.levelCount + 1) * 50,
          levelCount: this.state.levelCount + 1,
          timeInterval: 1800 - decrement,
          velocity: this.state.velocity * 1.02,
          decrement: decrement,
        });
      }

      // Check for colisions
      this.checkCollisionsWith(this.bullets, this.asteroids);
      this.checkCollisionsWith(this.ship, this.asteroids);

      // Remove or render
      this.updateObjects(this.particles, "particles");
      this.updateObjects(this.asteroids, "asteroids");
      this.updateObjects(this.bullets, "bullets");
      this.updateObjects(this.ship, "ship");
      this.destroyBottom(this.asteroids, "asteroids");
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
      nextLevelScore: 100,
      currentScore: 0,
      levelCount: 1,
      life: 5,
      timeInterval: 2000,
      decrement: 100,
      velocity: 5,
      asteroidCount: 1
    });

    setTimeout(() => {
      
      //impostato per permettere il resize della navicella
      this.ship = [];
      // Make ship
      let ship = new Ship({
        position: {
          x: this.state.screen.width / 2,
          y: this.state.screen.height - this.state.screen.height / 6,
        },
        create: this.createObject.bind(this),
        onDie: this.gameOver.bind(this),
        shipBorderColor: this.state.shipBorderColor,
      });
      this.createObject(ship, "ship");
    }, 500);

    // Make asteroids
    this.asteroids = [];

    this.generateAsteroids(this.state.asteroidCount);
    // console.log(this.asteroids)
  }

  gameOver() {
    console.log("game over");
    this.setState({
      inGame: false,
      // velocity: 5,
      // levelCount: 1,
      // life: 5,
      // asteroidCount: 1,
      // timeInterval: 2000,
      // decrement: 100,
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
          size: this.state.virusSize,
          position: {
            x: randomNumBetweenExcluding(
              this.state.virusSize,
              this.state.screen.width - this.state.virusSize
            ),
            // x: randomNumBetweenExcluding(
            //   this.state.screen.width / 2,
            //   this.state.screen.width / 2
            // ),
            y: 0,
          },
          velocity: {
            x: 0,
            y: this.state.velocity,
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

  destroyAllVirus(items) {
    let index = 0;
    for (let item of items) {
      
      item.destroy();
      this.setState({
        currentScore: this.state.currentScore,
      });
    }
    index++;
  }

  destroyBottom(items, group) {
    let index = 0;
    for (let item of items) {
      if (item.position.y > this.state.screen.height) {
        console.log("prova")
        // if(!isIOS){
        //   navigator.vibrate(500);
        // }
        this.setState({
          life: this.state.life - 1,
          currentScore: this.state.currentScore,
        });
        if (this.state.life < 1) {
          this.gameOver();
        }

        item.destroy();
      }
      index++;
    }
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
              // if(!isIOS){
              //   navigator.vibrate(500);
              // }
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

    if (this.state.showEducationModal && this.state.levelCount < 10) {
      //disabled button
      let buttonDisabledTiming = setTimeout(() => {
        this.setState({
          isButtonDisabled: true,
        });
      }, 1500);
      
      educationalModal = (
        <div className="educational-modal">
          <EducationalContents index={this.messageIndexToLoop[this.i]} />
          <button
            id="message-button"
            disabled={this.state.isButtonDisabled ? false : true}
            onClick={() => {
              this.destroyAllVirus(this.asteroids, "asteroids");
              clearTimeout(buttonDisabledTiming);
              //instance every level timing
              this.nextVirusTiming = setInterval(() => {
                this.generateAsteroids(1);
              }, this.state.timeInterval);
              this.setState({
                nextLevelHandler: true,
                pause: false,
                showEducationModal: false,
                isButtonDisabled: false,
              });
              this.i = this.i + 1;
            }}
          >
            <b>Prossimo livello</b>
          </button>
        </div>
      );
      setTimeout(()=>{
        if(this.i > this.messageIndexToLoop.length-1){
          document.getElementById("message-button").classList.add('no-message-btn');
        }
      },50)
      
    }

    if (this.state.showEducationModal && this.state.levelCount === 10) {
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
          onClick={()=> {
            this.handleChangeCredits();
            this.destroyAllVirus(this.asteroids, "asteroids");
          }}
        />
        <span className="score current-score">
          Score: {this.state.currentScore}
        </span>
        <span className="score top-score">
          Top Score: {this.state.topScore}
        </span>
        <span className="life-count score">
          <span>Level: {this.state.levelCount}</span> <br />
          <Lifes lifes={this.state.life} />
        </span>
        <span className="credits-game-mobile">
          <a
            onClick={() =>
              this.setState({ isCreditsModalOpen: true, pause: true })
            }
          >
            Credits
          </a>
        </span>
        <SocialSidebar />
        <div className="container mobile-controls mb-3">
          <div className="row align-items-center">
            <div className="col-3">
              <img
                onClick={() => {
                  this.ship[0].position.x = this.ship[0].position.x - this.state.screen.width/6;
                }}
                src={require("../assets/img/SX.png")}
              ></img>
            </div>
            <div className="col-6 px-0">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ keys: { space: true } });
                  setTimeout(() => {
                    this.setState({ keys: { space: false } });
                  }, 50);
                }}
              >
                Shoot
              </button>
            </div>
            <div className="col-3">
              <img
                onClick={() => {
                  this.ship[0].position.x = this.ship[0].position.x + this.state.screen.width/6;
                }}
                src={require("../assets/img/DX.png")}
              ></img>
            </div>
          </div>
        </div>

        <canvas
          id="mycanvas"
          ref="canvas"
          width={this.state.screen.width * this.state.screen.ratio}
          height={this.state.screen.height * this.state.screen.ratio}
        />
        <audio
          id="myaudio"
          src={require("../assets/audio/Chiptronical.mp3")}
          type="audio/mp3"
          autoPlay
          loop
        />
      </div>
    );
  }
}
