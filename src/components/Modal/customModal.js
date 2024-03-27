import React from "react";
import Modal from "react-bootstrap/Modal";
import "./customModal.scss";
import { Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const CustomModal = (props) => {
  const handleChange = () => {
    props.onClick();
  };

  return (
    <Modal
      dialogClassName="modal-dialog"
      show={props.show}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body bsPrefix="modalBodyContainer">
        <Row className="align-items-center">
          <Col xs={0} sm={4}></Col>
          <Col xs={8} sm={4} className="text-center">
            <p className="modalTitle">CREDITS</p>
          </Col>
          <Col xs={4} sm={4} className="colTitleContainer">
            <button onClick={handleChange} className="closeButton">
              X
            </button>
          </Col>
        </Row>
        <Row className="justify-content-center mb-1 text-sm-center">
          <Col xs={12} sm={"auto"}>
            <a
              href="www.miniuxdesign.com"
              target="blank"
              className="teamName"
            >
              Luca Miniucchi
            </a>
          </Col>
          <Col xs={12} sm={"auto"}>
            <a
              href="https://github.com/simoneantonicchio"
              target="blank"
              className="teamName"
            >
              Simone Antonicchio
            </a>
          </Col>
          <Col xs={12} sm={"auto"}>
            <a
              href="https://www.linkedin.com/in/brian-baldovino-4527b3136"
              target="blank"
              className="teamName"
            >
              Brian Baldovino
            </a>
          </Col>
        </Row>
        <div className="ispirationText-container">
          <p className="ispirationText">
            Per la realizzazione tecnica é stato utilizzato come base il
            progetto open source{" "}
            <a href="https://github.com/chriz001/Reacteroids" target="blank">
              <u>Reacteroids</u>
            </a>
            . Credits per la musica{" "}
            <a href="https://patrickdearteaga.com/arcade-music/" target="blank">
              <u>qui</u>
            </a>
            . <br />
            In questo periodo difficile aiutiamo a rendere virale la
            comunicazione positiva,
            <b>condividi se questo progetto ti ha positivizzato! :)</b>
          </p>
          {/* <p className="ispirationText">
              In questo periodo difficile aiutiamo a rendere virale la
              comunicazione positiva,{" "}
              <b>condividi se questo progetto ti ha positivizzato! :)</b>
            </p> */}
        </div>

        <Row className="socialList mt-1 mb-3">
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=virusarcade.site"
            target="_blank"
          >
            <button type="button" class="btn btn-danger btn-circle btn-xl">
              <Image src={require("../../assets/img/facebook.png")} rounded />
            </button>
          </a>
          <a
            href="whatsapp://send?text=https://virusarcade.site"
            data-action="share/whatsapp/share"
            target="_blank"
          >
            <button type="button" class="btn btn-danger btn-circle btn-xl">
              <Image src={require("../../assets/img/whatsapp.png")} rounded />
            </button>
          </a>
          <a
            href="tg://msg_url?url=https://virusarcade.site&amp;text=“VIRUS+” é un progetto a fini educativi e d’intrattenimento in cui l’aspetto ludico di un gioco arcade è unito con la diffusione di alcuni dei tanti messaggi e aspetti positivi che una situazione del genere, nonostante d’emergenza, sta producendo.

Fatti positivizzare, scopri VIRUS+ :)"
          >
            <button type="button" class="btn btn-danger btn-circle btn-xl">
              <Image src={require("../../assets/img/telegram.png")} rounded />
            </button>
          </a>
        </Row>
        <Row className="donateContainer">
          <p className="donationText">
            Fai una donazione per l’emergenza Coronavirus
          </p>
          <a
            href="https://www.specchiodeitempi.org/virus-arcade"
            // href="https://www.retedeldono.it/it/progetti/specchio-dei-tempi/emergenza-coronavirus"
            target="blank"
          >
            <button className="buttonStartModal">Dona ora</button>
          </a>
        </Row>
        <Row className="supportUscontainer">
          <p className="supportUsText">
            Sostienici, possiamo positivizzare ancora di più!
          </p>
          <a
            href="https://www.paypal.me/sostieniVirus?locale.x=it_IT"
            target="blank"
          >
            <button className="thanksButton">Grazie :)</button>
          </a>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;
