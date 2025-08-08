import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/iqwallet.png";
import "../styles/header.css";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  const handleClick = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "payment", label: "Payments" },
    { id: "entertainment", label: "Entertainment" },
    { id: "security", label: "Security" },
    { id: "travel", label: "Travel", isAnchor: true },
  ];

  return (
    <header className="modern-header">
      <Container className="header-container">
        <img src={logo} alt="Logo" className="modern-logo" />

        <nav className="modern-nav">
          {navItems.map((item) =>
            item.isAnchor ? (
              <a key={item.id} href={`#${item.id}`} className="modern-nav-link">
                {item.label}
              </a>
            ) : (
              <button
                key={item.id}
                className={`modern-nav-link ${
                  activeSection === item.id ? "active" : ""
                }`}
                onClick={() => handleClick(item.id)}
              >
                {item.label}
              </button>
            )
          )}
        </nav>
      </Container>
    </header>
  );
}
