import React, { useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";
import "../styles/sectionFour.css";
import iphone from "../assets/security.png";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheckIcon,
  FingerPrintIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";

export default function SectionFour() {
  const phoneRef = useRef(null);
  const isInView = useInView(phoneRef, { once: true });

  const features = [
    {
      icon: <ShieldCheckIcon className="hero-icon" />,
      text: "Android offers 2-step verification, Find My Phone, and remote data erase",
    },
    {
      icon: <FingerPrintIcon className="hero-icon" />,
      text: "Tap to pay uses encrypted payment codes to hide your real card number",
    },
    {
      icon: <WifiIcon className="hero-icon" />,
      text: "IQ Wallet lets you choose the info you share between products for a tailored experience",
    },
  ];

  return (
    <div className="section-four" id="security">
      {/* py-5 vardı classda padding-top geldiği için sildim yarın bi bak buna */}
      <Container>
        <div className="sectionFour-content d-flex flex-column flex-lg-row align-items-center justify-content-between">
          <motion.div
            ref={phoneRef}
            className="green-mainbackground me-lg-5 mb-4 mb-lg-0"
            initial={{ x: -200, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="green-background"></div>

            <img src={iphone} className="sectionFour-image" />
          </motion.div>

          {/* Sağ taraf */}
          <div className="sectionFour-text text-center text-lg-start">
            <p className="text-uppercase small fw-bold mb-2">Security</p>
            <h2 className="fw-bold mb-3">
              With IQ Wallet, you’re in control of your data
            </h2>
            <p className="sectionFour-text-muted">
              Protect your personal information wherever you go and your money
              wherever you pay. IQ Wallet gives you advanced security and
              easy-to-use privacy controls so you and your information stay safe
              every day.
            </p>

            <div className="features-list">
              {features.map((item, index) => (
                <div className="feature-item" key={index}>
                  <div className="feature-icon">{item.icon}</div>
                  <p className="feature-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
