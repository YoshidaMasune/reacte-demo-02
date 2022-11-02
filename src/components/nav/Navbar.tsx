import React, { useRef, useState } from "react";
import "./Nav.css";


interface IDrops {
   name: string
   lists: string[]
}

interface typeDrop {
   drops: Array<object>
}

const itemsDorpdown: React.FC<{contens: string[]}> = (props) => {
   const contents  = props.contens;
   return (
    <nav className="navDropdown">
      <ul className="nav-linked">
        {contents.map((content, i) => (
          <li key={i}>{content}</li>
        ))}
      </ul>
    </nav>
  );
};

const Dropdowns: React.FC<IDrops> = (props) => {
  console.log(props);
  
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <div
        className="l"
        onMouseLeave={() => setToggle(false)}
      >
        For Partners
      </div>
      {/* {toggle ? <Dropdown contents={contents} /> : null} */}
    </div>
  );
};

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const Partners = ["Employers", "insurers", "Health Systems",];

  const Dropdown:typeDrop = {
      drops: [
         {
            name: "For Partners",
            lists: Partners
         },
      ]
   }


  const link_Logo = `https://assets.website-files.com/631eddfd322acf4bde169f3f/631ef9dda559623779ccc8fa_paytient-logo.svg`;

  return (
    <div className="navbar">
      <div className="log0">
        <img src={link_Logo} alt="paytient-logo" />
      </div>
      <div className="nav">
        <div className="g-d">
          {
            Dropdown.drops.map( item => <Dropdowns name={item.name} />)
          }
        </div>
        <div className="btn-login"></div>
      </div>
    </div>
  );
}

export default Navbar;
