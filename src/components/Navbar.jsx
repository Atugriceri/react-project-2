import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarToggler from "./NavbarToggler";
import NavbarCollapsingMenu from "./NavbarCollapsingMenu";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning shadow border-dark border-bottom border-3 px-3">
      <NavbarLogo />
      <NavbarToggler />
      <NavbarCollapsingMenu />
    </nav>
  );
};

export default Navbar;
