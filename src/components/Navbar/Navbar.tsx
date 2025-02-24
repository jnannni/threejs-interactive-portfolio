import { useState } from 'react';
import { NavLink } from 'react-router';
import './navbar.css';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(false);
  const navIcon = activeNav ? "close" : "menu";

  return (
    <nav className="navbar container">
        <div className='navbar-header'>
          <div><s>Katja</s>Sonic!</div>
          <label htmlFor="check">
            <input type='checkbox' id='check'/>
            <span className="material-symbols-outlined menu-icon" onClick={() => setActiveNav(!activeNav)}>{navIcon}</span> 
          </label>          
        </div>        
        <ul className="nav-menu">
            <NavLink to="/" className='nav-item'><a href="/">Home</a></NavLink> 
            <NavLink to="/" className='disabled nav-item'><a href="/">Home</a></NavLink> 
            <NavLink to="/" className='disabled nav-item'><a href="/">Home</a></NavLink> 

        </ul>
    </nav>
  )
}

export default Navbar;