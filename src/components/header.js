import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/iqlogo-beyaz.png";
import "../styles/header.css";

export default function Header() {
  return (
    <header>
      <div className="header-top text-start border-bottom ">
        <Container>
          <img src={logo} alt="logo" className="header-logo"></img>
        </Container>
      </div>

      <div className="header-bottom  d-none d-lg-block">
        <Container>
          <Nav className="justify-content-center">
            <Nav.Link href="#hero" className="nav-link text-white mx-3">
              Ödeme
            </Nav.Link>
            <Nav.Link href="#features" className="text-white mx-3">
              Tickets
            </Nav.Link>
            <Nav.Link href="#footer" className="text-white mx-3">
              Güvenlik
            </Nav.Link>
            <Nav.Link href="#footer" className="text-white mx-3">
              Security
            </Nav.Link>
          </Nav>
        </Container>
      </div>
    </header>
  );
}
