import React from "react";

const Footer = () => {
  const styles = {
    textAlign: "center",
    background: "#ddd",
    padding: "2rem 5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    bottom: "0",
    left: "0",
    right: "0"
  };
  return (
    <footer style={styles}>
      Made with{" "}
      <i className="fa fa-heart" style={{ color: "red", margin: "0.5rem" }} />{" "}
      by Asah Victor & Oni Benjamin. And not Dammy Ayans
    </footer>
  );
};

export default Footer;
