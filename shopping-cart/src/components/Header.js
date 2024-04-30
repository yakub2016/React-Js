import '../styles/Header.css';
import { NavLink } from 'react-router-dom';

function Header({ isHome }) {
  return (
    <div className={`Header ${isHome && 'home'}`}>
      <div className={`Header-title ${isHome && 'home'}`}>
        <NavLink to="/">Jewelry Heaven</NavLink>
      </div>
      <nav className="Header-nav">
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
}

export default Header;
