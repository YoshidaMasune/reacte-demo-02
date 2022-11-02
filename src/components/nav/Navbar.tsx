import React, { useRef, useState } from "react";
import "./Nav.css";


interface IDrops {
   name: string
   lists: string[]
}

interface list {
  list: string[]
}
const itemsDorp:React.FC<list> = (props) => {
   const { list } = props;
   return (
    <nav className="navDropdown">
      <ul className="nav-linked">
        {
          list.map( item => <li>{item}</li>)
        }
      </ul>
    </nav>
  );
};

const Dropdowns: React.FC<IDrops> = (props) => {
  
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <div
        className="l"
        onMouseLeave={() => setToggle(false)}
      >
        {props.name}
      </div>
      <itemsDorp list={props.lists} />
    </div>
  );
};

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const Partners = ["Employers", "insurers", "Health Systems",];

  const Drops:Array<IDrops> = [
    {
      name: "For Partners",
      lists: Partners
    }
  ]


  const link_Logo = `https://assets.website-files.com/631eddfd322acf4bde169f3f/631ef9dda559623779ccc8fa_paytient-logo.svg`;

  return (
    <div className="navbar">
      <div className="log0">
        <img src={link_Logo} alt="paytient-logo" />
      </div>
      <div className="nav">
        <div className="g-d">
          {
            Drops.map( item => <Dropdowns name={item.name} lists={item.lists} /> )
          }
        </div>

        
        <div className="btn-login"></div>
      </div>
    </div>
  );
}

export default Navbar;
