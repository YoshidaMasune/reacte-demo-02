import React, { createRef, useRef, useState } from "react";
import "./Nav.css";

interface DropdownType {
  title: string;
  navItem: string[];
}

function dropdown(item: string[]) {
  const dropRef:any = createRef();
  const display = (e:any) => {
    e.target.classList.toggle("display");
  }
  return (
    <>
      <ul ref={dropRef} onMouseEnter={display} onMouseLeave={display} className="">
        {item.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

const NavDorpdown: React.FC<DropdownType> = (props) => {
  const [toggle, setToggle] = useState(false);
  const dropdownRef: any = createRef();

  const toggleDropdown = (e: any) => {
    dropdownRef.current.classList.toggle("display");
    dropdownRef.current.classList.toggle("border-line")
  };
  return (
    <div className="nav-dropdown">
      <div
        className="toggle-link"
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        {props.title}
      </div>
      <nav ref={dropdownRef} className="dropdown">
        {dropdown(props.navItem)}
      </nav>
    </div>
  );
};

const DropdownItems: Array<DropdownType> = [
  {
    title: "For Partners",
    navItem: ["Employers", "Insurers", "Health Systems"],
  },
  {
    title: "For Paytients",
    navItem: ["Start Here", "What is an HPA?"],
  },
];

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const link_Logo = `https://assets.website-files.com/631eddfd322acf4bde169f3f/631ef9dda559623779ccc8fa_paytient-logo.svg`;

  return (
    <div className="navbar">
      <div className="logo">
        <img src={link_Logo} alt="paytient-logo" />
      </div>
      <div className="nav">
        <div className="nav-linked">
          {DropdownItems.map((item) => (
            <NavDorpdown
              title={item.title}
              navItem={item.navItem}
              key={item.title}
            />
          ))}
        </div>
        <div className="btn-login"></div>
      </div>
    </div>
  );
}

export default Navbar;
