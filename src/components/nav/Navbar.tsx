import React, { createRef, useRef, useState } from "react";
import "./Nav.css";
import { Link } from 'react-router-dom'

interface navItemt {
  path: string
  link: string
}
interface DropdownType {
  title: string;
  navItem: navItemt[];
}


function dropdown(item: navItemt[]) {
  const dropRef: any = createRef();
  const display = (e: any) => {
    e.target.classList.toggle("display");
  };

  // console.log(item);
  
  return (
    <>
      <ul
        className="drop-list"
      >
        {
          item.map( i => <li key={i.path}>
            <Link to={i.path}>{i.link}</Link>
            </li>)
        }
      </ul>
    </>
  );
}

const NavDorpdown: React.FC<DropdownType> = (props) => {
  const [toggle, setToggle] = useState(false);
  const dropdownRef: any = createRef();

  const toggleDropdown = (e: any) => {
    dropdownRef.current.classList.toggle("display");
    dropdownRef.current.classList.toggle("border-line");
  };
  return (
    <div
      className="nav-dropdown"
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <div className="toggle-link">{props.title}</div>
      <nav ref={dropdownRef} className="dropdown">
        {dropdown(props.navItem)}
      </nav>
    </div>
  );
};

const DropdownItems: Array<DropdownType> = [
  {
    title: "For Partners",
    navItem: [{path: "Employers", link: "Employers"}, {path: "Insurers", link: "Insurers"},],
  },
  {
    title: "For Paytients",
    navItem: [{path: "Employers", link: "Employers"}, {path: "Insurers", link: "Insurers"},],
  },
  {
    title: "Resources",
    navItem: [{path: "Employers", link: "Employers"}, {path: "Insurers", link: "Insurers"},],
  }
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

export { DropdownItems }

export default Navbar;
