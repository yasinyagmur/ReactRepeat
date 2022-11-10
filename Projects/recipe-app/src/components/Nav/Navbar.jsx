import { Link } from "react-router-dom";
import Nav, { Hamburger, Logo, Menu, MenuLink } from "./Navbar.style";
import NavbarStyle from "./Navbar.style";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">
        <i>{"JasonR"}</i>
        <span>Recipe</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu isOpen={isOpen}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        <MenuLink to="logout">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
