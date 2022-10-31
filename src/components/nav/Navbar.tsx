import React, {useRef} from 'react'
import './Nav.css'

interface DropdownType{
   hover: any
   contents: string[]
}

const Dropdown:React.FC<DropdownType> =  (props) => {
   const { contents, hover } = props;

   return (
   <nav ref={hover} className='navDropdown'>
      <ul className='nav-linked'>
         { contents.map( (content, i) => <li key={i} >{content}</li> ) }
      </ul>
   </nav>
   )
}

function Navbar() {

   const Dropdowns = [
      "test",
      "test",
      "home"
   ]

   const hover:any = useRef()

   const link_Logo = `https://assets.website-files.com/631eddfd322acf4bde169f3f/631ef9dda559623779ccc8fa_paytient-logo.svg`

  return (
   <div className='navbar'>
      <div className="log0">
         <img src={link_Logo} alt="paytient-logo" />
      </div>
      <div className="nav">
         <div className="g-d">
            <div>
               <div>For Partners</div>
               <Dropdown hover={hover} contents={Dropdowns} />
            </div>
         </div>
         <div className="btn-login">

         </div>
      </div>
   </div>
  );
}

export default Navbar