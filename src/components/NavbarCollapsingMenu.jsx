import React from "react";

const NavbarCollapsingMenu = () => {
  const NAV_LINKS = ["Home", "Cats", "Features"];
  const Nav_Links = NAV_LINKS.map(item => (
    <a className="nav-link" href="#">
      {item}
    </a>
  ));

  return (
    <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarNavAltMarkup"
    >
      <div className="navbar-nav">{Nav_Links}</div>
    </div>
  );
};

export default NavbarCollapsingMenu;
