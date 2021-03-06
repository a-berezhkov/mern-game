import React from "react";
import s from "./navigation.module.css";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import { navItems } from "../../data.js";

export const Navigation = () => {
  return (
    <div className={s.navigation}>
      <Navbar
        className={s.navigation__navbar}
        expand="md"
        container="md"
        color="light"
      >
        <NavbarBrand className={s.navigation__navbrand} href="/">
          <span style={{ color: "#3399FF" }}>pi</span>
          <span style={{ color: "#F08080" }}>ki</span>
          <span style={{ color: "#33CC33" }}>mo</span>
          <span style={{ color: "#FF9900" }}>ni</span>
        </NavbarBrand>

        <Nav className={s.list}>
          {navItems.map((elem, index) => (
            <NavItem className={s.navigation__navitem} key={index}>
              <Link to={elem.href}>
                <div className={s.navigation__navlink}>{elem.title}</div>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </Navbar>
    </div>
  );
};
