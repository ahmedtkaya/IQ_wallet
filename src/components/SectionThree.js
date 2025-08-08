import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "../styles/sectionThree.css";
import iphone from "../assets/tickets.png";
import { AnimatePresence, motion, useInView } from "framer-motion";

export default function SectionThree() {
  const words = ["event", "sports", "concert"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const phoneRef = useRef(null);
  const isInView = useInView(phoneRef, { once: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="section-three" id="entertainment">
      {/* py-5 vardı classda */}
      <Container>
        <div className="sectionThree-content d-flex flex-column flex-lg-row align-items-center justify-content-between">
          {/* Sağ taraf */}
          <div className="sectionThree-text text-center text-lg-start">
            <p className="text-uppercase small fw-bold mb-2">Entertainment</p>
            <h2
              className="fw-bold mb-3"
              aria-label="Now your phone is your ticket to the theme park"
            >
              Now your phone is your ticket to the{" "}
              <AnimatePresence mode="wait">
                {visible && (
                  <motion.span
                    key={words[currentIndex]}
                    style={{ color: "red", display: "inline-block" }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {words[currentIndex]}
                  </motion.span>
                )}
              </AnimatePresence>
            </h2>
            <p className="sectionThree-text-muted">
              Carry everything you need to see a show or cheer on your favorite
              team. Google Wallet will even surface your ticket on the day of
              the event, so you won't miss the opening act or first quarter.
            </p>
          </div>

          <motion.div
            ref={phoneRef}
            className="phone-mainbackground me-lg-5 mb-4 mb-lg-0"
            initial={{ x: 200, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="phone-background"></div>
            <img src={iphone} className="sectionThree-image" alt="iPhone" />
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
