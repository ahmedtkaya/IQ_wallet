import React from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/iqwallet.png";
import "../styles/footer.css";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="custom-footer">
      <Container className="footer-inner">
        <div className="footer-top">
          <div className="footer-left">
            <img src={logo} alt="Logo" className="footer-logo" />
          </div>
          <div className="footer-social">
            <FaLinkedin className="footer-icon" />
            <FaFacebook className="footer-icon" />
            <FaInstagram className="footer-icon" />
            <FaTwitter className="footer-icon" />
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © 2025 <span className="footer-brand">IQ Holding</span>. All rights
            reserved
          </p>
          <div className="footer-links">
            <a href="#terms" className="footer-link">
              Terms & Condition
            </a>
            <a href="#privacy" className="footer-link">
              Privacy policy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
