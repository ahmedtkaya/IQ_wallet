import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles/sectionOne.css";
import logo from "../assets/exmaplte.jpeg";
import Coin3D from "./Coin3D";

export default function SectionOne() {
  return (
    <div className="section-one">
      <Container>
        <div className="section-text text-center">
          <h3>Bu Bir Wallet Değil.</h3>
          <h1>Bu Bir IQ Wallet.</h1>
          <div className="limited-width">
            <p>
              Yeni IQ Cüzdan ile nereye giderseniz gidin, her şey tek bir yerde
              güvende. Ödeme kartlarınız, sadakat kartlarınız, konser
              biletleriniz ve daha fazlası gibi temel ihtiyaçlarınıza Android
              veya IOS telefonunuzdan erişin.
            </p>
          </div>
        </div>

        <div className="section-image text-center">
          {/* <img src={logo} className="img-fluid" alt="section visual" /> */}
          <Coin3D scrollY={window.scrollY} />
        </div>
      </Container>
    </div>
  );
}
