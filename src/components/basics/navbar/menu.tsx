import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import Hamburger from "hamburger-react";

const NavMenu = () => {
  const [isOpen, setOpen] = useState(false);

  var styles = {
    bmBurgerButton: {
      position: "sticky",
      width: "18px",
      height: "15px",
      left: "16px",
      top: "26px",
      display: "none",
    },
    bmBurgerBars: {
      background: "#373a47",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      top: "60px",
      left: "0",
    },
    bmMenu: {
      background: "#373a47",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      //   display: 'inline-block'
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
      top: "60px",
      left: "0",
    },
  };

  return (
    <div>
      <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      <Menu styles={styles} isOpen={isOpen}>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </Menu>
    </div>
  );
};

export default NavMenu;
