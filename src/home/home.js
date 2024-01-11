import React, { useState, useEffect } from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-bootstrap";
import CustomModal from "../components/Modal/customModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Container fluid className="text-sm-left text-sm-center">
        <Col sm={12}>
          <h1 className="title mt-md-5 text-sm-center text-xs-left">VIRUS+</h1>
          <h2 className="subTitle">SEI. STATO. POSITIVIZZATO.</h2>
          <div className="description-container">
            <p className="description">
              <b>“Virus+” é un progetto a fini educativi e d’intrattenimento</b>{" "}
              in cui gli autori hanno voluto unire l’aspetto ludico di un gioco
              arcade con la diffusione di alcuni dei tanti messaggi e aspetti
              positivi che una situazione del genere, nonostante d’emergenza,
              sta producendo.
            </p>
            <p className="description">
              <b>
                Nella sezione “Credits” abbiamo deciso di inserire un’opzione
                per fare una donazione alla “Fondazione La Stampa - Specchio dei
                tempi O.N.L.U.S” a favore della terapia intensiva negli
                ospedali.
              </b>
            </p>
            <p className="description">
              In questo periodo difficile aiutiamo a rendere virale la
              comunicazione positiva,
              <b>condividi se questo progetto ti ha positivizzato! :)</b>
            </p>
            <p className="description mt-5" style={{ fontSize: "16px" }}>
              Per un'esperienza di gioco ottimale ti consigliamo di utilizzare i
              seguenti browser web:
              <a
                href="https://www.google.com/intl/it_it/chrome/"
                target="blank"
              >
                <u> Chrome</u>
              </a>
              ,
              <a href="https://www.opera.com/it" target="blank">
                <u> Opera</u>
              </a>
              ,
              <a href="https://www.apple.com/it/safari/" target="blank">
                <u> Safari (ioS e macOS)</u>
              </a>
              . <br />
              VIRUS+ ha due modalità di gioco diverse per Desktop e Mobile,
              provale entrambe ;)
              <a href="https://www.iubenda.com/privacy-policy/82263128" target="blank" className="iubenda-black iubenda-embed d-block d-sm-none" title="Privacy Policy "><u>Privacy Policy</u></a>
            </p>
          </div>

          <div id="actions">
            <Link to="/game">
              <button className="buttonStart">START</button>
            </Link>
            <Row className="socialList">
              <b
                style={{ fontFamily: "Open Sans", textDecoration: "underline" }}
              >
                Share
              </b>

              <a
                href="https://www.facebook.com/sharer/sharer.php?u=virusarcade.site"
                target="_blank"
              >
                <button
                  type="button"
                  className="btn btn-danger btn-circle btn-xl"
                >
                  <Image src={require("../assets/img/facebook.png")} rounded />
                </button>
              </a>
              <a
                href="whatsapp://send?text=https://virusarcade.site"
                data-action="share/whatsapp/share"
                target="_blank"
              >
                <button
                  type="button"
                  className="btn btn-danger btn-circle btn-xl"
                >
                  <Image src={require("../assets/img/whatsapp.png")} rounded />
                </button>
              </a>
              <a
                href="tg://msg_url?url=https://virusarcade.site&amp;text=“VIRUS+” é un progetto a fini educativi e d’intrattenimento in cui l’aspetto ludico di un gioco arcade è unito con la diffusione di alcuni dei tanti messaggi e aspetti positivi che una situazione del genere, nonostante d’emergenza, sta producendo.

Fatti positivizzare, scopri VIRUS+ :)"
              >
                <button
                  type="button"
                  className="btn btn-danger btn-circle btn-xl"
                >
                  <Image src={require("../assets/img/telegram.png")} rounded />
                </button>
              </a>
            </Row>
          </div>

          <CustomModal onClick={handleChange} show={isModalOpen} />
        </Col>
      </Container>
      <div className="credits pb-3 d-flex">
        <p onClick={() => setIsModalOpen(true)}>
          <b>Credits</b>
        </p>
        <a href="https://www.iubenda.com/privacy-policy/82263128" target="blank" className="iubenda-black iubenda-embed pl-2 d-none d-sm-block" title="Privacy Policy ">Privacy Policy</a>
      </div>
    </>
  );
};

export default Home;
