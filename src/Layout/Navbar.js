import React, { useState, useEffect, useRef } from "react";
import { Toolbar, AppBar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import * as ReactScroll from "react-scroll";
import { Button, Drawer, Menu } from "antd";
import NavMenu from "./NavMenu";
import logo from "static/images/logo.png";
import blackLogo from "static/images/black-logo.png";
import menu from "static/images/icons/menu-icon.svg";
import whiteArrow from "static/images/icons/white-arrow.svg";



export default function Navbar(props) {
  const [navBackground, setNavBackground] = useState(false);
  const [drawer, setDrawer] = useState(false);

  const navRef = useRef();
  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 10;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };

    ReactScroll.Events.scrollEvent.register("begin", function (to, element) {});

    ReactScroll.Events.scrollEvent.register("end", function (to, element) {});
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
      ReactScroll.Events.scrollEvent.remove("begin");
      ReactScroll.Events.scrollEvent.remove("end");
    };
  }, []);

  const showDrawer = () => {
    setDrawer(true);
  };

  const hideDrawer = () => {
    setDrawer(false);
  };

  return (
    <React.Fragment>
        <AppBar
          position="fixed"
          className={`${navBackground ? "coloredStyle" : "transparentStyle"}`}
          id="navbar"
        >
          <Toolbar className="toolbar">
            {navBackground ? (
              <img
                onClick={() => showDrawer()}
                src={menu}
                alt="Flexitank"
                className="menu-icon"
              />
            ) : (
              <img
                onClick={() => showDrawer()}
                src={menu}
                alt="Flexitank"
                className="menu-icon"
              />
            )}

            <NavLink exact to="/">
              {navBackground ? (
                <img className="logo" src={blackLogo} alt="Saitank" />
              ) : (
                <img className="logo" src={logo} alt="Saitank" />
              )}
            </NavLink>
            <div className="grow" />
            <NavMenu navBackground={navBackground} />
          </Toolbar>
        </AppBar>

      <Drawer
        className="sidebar"
        title="Menu"
        placement="left"
        closable={true}
        onClose={hideDrawer}
        visible={drawer}
        style={{ zIndex: "2000" }}
        headerStyle={{ border: "none" }}
      >
        <Menu style={{ width: 256 }} mode="inline" theme="light">
          <Menu.Item key="/" onClick={() => hideDrawer()}>
            <NavLink exact to="/">
              <p className="link">Home</p>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/flexitank" onClick={() => hideDrawer()}>
            <NavLink exact to="/flexitank">
              <p className="link">Flexitank</p>
            </NavLink>
          </Menu.Item>
          <Menu.Item  key="/services" onClick={() => hideDrawer()}>
            <NavLink exact to="/services">
              <p className="link">Services</p>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/products" onClick={() => hideDrawer()}>
            <NavLink exact to="/products">
              <p className="link">Products</p>
              <img className="arrow" src={whiteArrow} alt="White Arrow" />
            </NavLink>
          </Menu.Item>
          <Menu.Item key="login" onClick={() => hideDrawer()}>
            <Button className="contact-button">Enquiry</Button>
          </Menu.Item>
        </Menu>
      </Drawer>
    </React.Fragment>
  );
}
