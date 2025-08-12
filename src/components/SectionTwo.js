import React, { useEffect, useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import '../styles/sectionTwo.css';
import iphone from '../assets/iphonee.png';
import { motion, useInView } from 'framer-motion';

export default function SectionTwo() {
  const phoneRef = useRef(null);
  const isInView = useInView(phoneRef, { once: true });
  return (
    <div className="section-two" id="payment">
      {/* py-5 vardı classda padding-top geldiği için sildim yarın bi bak buna */}
      <Container>
        <div className="sectionTwo-content d-flex flex-column flex-lg-row align-items-center justify-content-between">
          <motion.div
            ref={phoneRef}
            className="orange-mainbackground me-lg-5 mb-4 mb-lg-0"
            initial={{ x: -200, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="orange-background"></div>

            <img src={iphone} className="image" />
          </motion.div>

          {/* Sağ taraf */}
          <div className="sectionTwo-text text-center text-lg-start">
            <p className="text-uppercase small fw-bold mb-2">Payments</p>
            <h2 className="fw-bold mb-3">A faster, safer, easier way to pay.</h2>
            <p className="sectionTwo-text-muted">
              When you add your payment cards to IQ Wallet, you can tap to pay anywhere IQ Pay is
              accepted. And know your personal payment details are kept safe and secure.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
