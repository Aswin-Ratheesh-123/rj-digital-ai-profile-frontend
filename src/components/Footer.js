import React from "react";

function Footer() {
  return (
    <footer
      style={{
        background: "#0a0a0a",
        color: "white",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <p>© {new Date().getFullYear()} RJ ATLAS DIGITAL AI</p>
    </footer>
  );
}

export default Footer;
