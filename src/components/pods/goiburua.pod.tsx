import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const GoiburuaPod: React.FC = () => {
  return (
    <Navbar expand="lg" className="navbar-aditzak" variant="dark">
      <Navbar.Brand>
        <span className="navbar-izena">EUSKARA LANDUZ</span>
      </Navbar.Brand>
      <Nav className="mr-auto menua">
          <Link to="/" className="navbar-esteka">
            Hasiera
          </Link>
          <Link to="/aditzak" className="navbar-esteka">
            Aditz laguntzailea
          </Link>
      </Nav>
      <Navbar.Collapse className="justify-content-end">
          <Link to="/lehen-hitza" className="navbar-esteka">
            Lehen hitza euskaraz
          </Link>
          <Link to="/honiburuz" className="navbar-esteka">
            Honi buruz
          </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
