import React from "react";
import { Container } from "react-bootstrap";
import "../styles/sectionTwo.css";
import iphone from "../assets/iphonee.png";

export default function SectionTwo() {
  return (
    <div className="section-two py-5">
      <Container>
        <div className="sectionTwo-content d-flex flex-column flex-lg-row align-items-center justify-content-between">
          {/* Sol taraf (yeşil arka planlı alan) */}
          <div className="orange-mainbackground me-lg-5 mb-4 mb-lg-0">
            <div className="orange-background"></div>
            <img src={iphone} className="image" />
          </div>

          {/* Sağ taraf */}
          <div className="sectionTwo-text text-center text-lg-start">
            <p className="text-uppercase small fw-bold text-muted mb-2">
              Payments
            </p>
            <h2 className="fw-bold mb-3">
              A faster, safer, easier way to pay.
            </h2>
            <p className="text-muted">
              When you add your payment cards to Google Wallet, you can tap to
              pay anywhere Google Pay is accepted. And know your personal
              payment details are kept safe and secure.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
