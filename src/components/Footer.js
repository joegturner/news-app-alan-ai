import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Created by &nbsp;</p>
      <a
        href="https://joegturner.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Joe T
      </a>
      <p>&nbsp;and the amazing AI: &nbsp;</p>
      <a
        href="https://studio.alan.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="footer__logo"
          src="https://alan.app/voice/images/previews/preview.jpg"
          alt="Alan AI Logo"
        ></img>
      </a>
    </footer>
  );
};

export default Footer;
