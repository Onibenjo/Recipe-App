import React from "react";

const Header = ({ children, title, styleClass }) => {
  const pageHeight = window.innerHeight;
  return (
    <header>
      <div className="container-fluid">
        <div
          className={`row align-items-center ${styleClass}`}
          style={`min-height: ${pageHeight}px`}>
          <div className="col text-center">
            <h1 className="text-light text-uppercase display-3 letter-spacing text-slanted">
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: "default-title",
  styleClass: "header-hero"
};

export default Header;
