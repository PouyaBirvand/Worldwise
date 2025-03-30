import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <Logo />
      
      <button 
        className={styles.mobileMenuButton} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ""}`}></span>
        <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ""}`}></span>
        <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ""}`}></span>
      </button>
      
      <ul className={`${styles.navList} ${isMenuOpen ? styles.open : ""}`}>
        <li>
          <NavLink 
            to="/pricing" 
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/product" 
            onClick={() => setIsMenuOpen(false)}
          >
            Product
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/login" 
            className={styles.ctaLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;