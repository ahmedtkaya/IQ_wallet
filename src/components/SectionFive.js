import React, { useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";
import "../styles/sectionFive.css";
import iphone from "../assets/travel.png";
import { motion, useInView } from "framer-motion";
import {
  TicketIcon,
  TruckIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function SectionFive() {
  const phoneRef = useRef(null);
  const isInView = useInView(phoneRef, { once: true });

  const features = [
    {
      icon: <TruckIcon className="hero-icon" />,
      text: "See the right pass at the right time",
    },
    {
      icon: <TicketIcon className="hero-icon" />,
      text: "Skip the line or ticket booth",
    },
    {
      icon: <ExclamationTriangleIcon className="hero-icon" />,
      text: "Get updates from Google Wallet if your departure info changes",
    },
  ];

  return (
    <div className="section-five" id="travel">
      {/* py-5 vardı classda padding-top geldiği için sildim yarın bi bak buna */}
      <Container>
        <div className="sectionFive-content d-flex flex-column flex-lg-row align-items-center justify-content-between">
          {/* Sağ taraf */}
          <div className="sectionFive-text text-center text-lg-start">
            <p className="text-uppercase small fw-bold mb-2">Travel</p>
            <h2 className="fw-bold mb-3">Get around town with your phone</h2>
            <p className="sectionFive-text-muted">
              Carry metro cards, plane tickets and bus passes all on your phone.
              Keep up with changes to departure times with information pulled
              from Google Search and load your transit card balance directly in
              Google Maps. That way you’ll know when your funds are running low
              before it’s too late.
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
          <motion.div
            ref={phoneRef}
            className="white-mainbackground me-lg-5 mb-4 mb-lg-0"
            initial={{ x: 200, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="white-background"></div>

            <img src={iphone} className="sectionFive-image" />
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
