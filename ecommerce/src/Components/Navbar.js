import React from 'react'
import "./Nav.css";
import{FiHeart} from 'react-icons/fi'
import{AiOutlineShoppingCart,AiOutlineUserAdd} from "react-icons/ai";

function Navbar() {
  return (
   <nav>
    <div className='nav-container'>
        <input type='tex' className='search-input' placeholder='Enter your search shoes.' />
    </div>
    <div className='profile-container'>
        <a href='#'>
        <FiHeart className='nav-icons'/>
        </a>
        <a href='#'>
            <AiOutlineShoppingCart className='nav-icons'/>
            <a href='#'>
            <AiOutlineUserAdd className='nav-icons'/>
        </a>
        </a>

    </div>
   </nav>
  );
}

export default Navbar;