import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles/sectionOne.css";
import logo from "../assets/exmaplte.jpeg";
import Coin3D from "./Coin3D";

export default function SectionOne() {
  return (
    <div className="section-one" id="sectionOne">
      <Container>
        <div className="section-text text-center">
          <h1>Not Just A Wallet.</h1>
          <h3>Just IQ Wallet.</h3>

          <div className="limited-width">
            <p>
              Wherever you go with new IQ Wallet, everything is secure. Payment
              cards, entertainment tickets, travel tickets and more
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
