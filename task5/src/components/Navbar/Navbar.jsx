import React from "react";
import Text from "../Links/Text";
import "./Navbar.css";

function Navbar() {
  let links = [
    "Baş səhifə",
    "Siyasət",
    "İqtisadiyyat",
    "Cəmiyyət",
    "Şou-biznes",
    "Müharibə",
    "İdman",
    "Kriminal",
    "Mədəniyyət",
  ];
  return (
    <div className="navbar">
      <div className="container">
        <div className="lists">
          {links.map((link) => {
           return(<Text key={link} link={link}/>);
          })}
        </div>
        <div className="icon">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
