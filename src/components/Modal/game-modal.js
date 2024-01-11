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
        <Col className="colMainContainer">
          <Row>
            <Col xs={12} sm={12} className="text-sm-center">
              <p className="modalTitle">{props.title}</p>
            </Col>
            {/* <Col className="colTitleContainer">
              <button onClick={handleChange} className="closeButton">
                <p className="closeModal">X</p>
              </button>
            </Col> */}
          </Row>
          <Row className="justify-content-sm-center">
            <button
              onClick={handleChange}
              style={{ width: "100% !important" }}
              className="buttonStartModal"
            >
              <b>Gioca ancora</b>
            </button>
          </Row>
          <p className="ispirationText">
            {" "}
            In questo periodo difficile aiutiamo a rendere virale la
            comunicazione positiva,{" "}
            <b>condividi se questo progetto ti ha positivizzato! :)</b>
          </p>
          <Row className="socialList">
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=virusarcade.site"
              target="_blank"
            >
              <button type="button" className="btn btn-danger btn-circle btn-xl">
                <Image src={require("../../assets/img/facebook.png")} rounded />
              </button>
            </a>
            <a
              href="whatsapp://send?text=https://virusarcade.site"
              data-action="share/whatsapp/share"
              target="_blank"
            >
              <button type="button" className="btn btn-danger btn-circle btn-xl">
                <Image src={require("../../assets/img/whatsapp.png")} rounded />
              </button>
            </a>
            <a
              href="tg://msg_url?url=https://virusarcade.site&amp;text=“VIRUS+” é un progetto a fini educativi e d’intrattenimento in cui l’aspetto ludico di un gioco arcade è unito con la diffusione di alcuni dei tanti messaggi e aspetti positivi che una situazione del genere, nonostante d’emergenza, sta producendo.

Fatti positivizzare, scopri VIRUS+ :)"
            >
              <button type="button" className="btn btn-danger btn-circle btn-xl">
                <Image src={require("../../assets/img/telegram.png")} rounded />
              </button>
            </a>
          </Row>
          <Row className="donateContainer">
            <p className="donationText">
              Fai una donazione per l’emergenza Coronavirus
            </p>
            <a
              href="https://www.specchiodeitempi.org/virus-arcade "
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
        </Col>
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;
