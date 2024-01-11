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
          <div>
            <p className="description">
              <b>“Virus+” é un progetto a fini educativi e d’intrattenimento</b>{" "}
              in cui gli autori hanno voluto unire l’aspetto ludico di un gioco
              arcade con la diffusione di alcuni dei tanti messaggi e aspetti
              positivi che una situazione del genere, nonostante d’emergenza,
              sta producendo.
            </p>
            <p className="description">
              <b>
                VIRUS+ sostiene la “Fondazione La Stampa - Specchio dei tempi
                O.N.L.U.S” per raccogliere donazioni a favore della terapia
                intensiva negli ospedali.
              </b>
            </p>
            <p className="description">
              Purtroppo al momento la versione tablet non é disponibile,{" "}
              <b>
                ma puoi scoprire VIRUS+ provando la versione Desktop e/o Mobile
                ;)
              </b>
            </p>
          </div>
          <Row className="justify-content-center align-items-center">
            <div className="col-4 offset-2 text-right">
              <p className="donationText-tablet">
                Fai una donazione per l’emergenza Coronavirus
              </p>
            </div>
            <div className="col-6 px-0 text-left">
              <a
                href="https://www.specchiodeitempi.org/virus-arcade"
                target="blank"
              >
                <button className="buttonStartModal">Dona ora</button>
              </a>
            </div>
          </Row>
          <Row className="justify-content-center align-items-center mt-2">
            <div className="col-4 offset-2 text-right">
              <p className="donationText-tablet">
                Sostienici, possiamo positivizzare ancora di più!
              </p>
            </div>
            <div className="col-6 px-0 text-left">
              <a
                href="https://www.paypal.me/sostieniVirus?locale.x=it_IT"
                target="blank"
              >
                <button className="thanksButton">Grazie :)</button>
              </a>
            </div>
          </Row>

          {/* <CustomModal onClick={handleChange} show={isModalOpen} /> */}
        </Col>
      </Container>
      {/* <p onClick={() => setIsModalOpen(true)} className="credits pb-3">
        <b>Credits</b>
      </p> */}
    </>
  );
};

export default Home;
