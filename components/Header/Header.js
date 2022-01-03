import React from 'react';
import Image from 'next/image';
import classes from './Header.module.scss';
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from 'react-icons/fi';

const Header = () => {
  return (
    <header className={classes.headerContainer}>
      <section className={classes.headerBar}>
        <nav className={classes.headerMainNav}>
          <div>
            <Image 
              src="/images/icnimage-logo.png"
              alt="logo"
              width={436}
              height={105}
            />
          </div>
          <ul>
            <li>Hem</li>
            <li>Alla Produkter</li>
            <li>Kategorier</li>
          </ul>
        </nav>
        <nav className={classes.headerSecondaryNav}>
          <button>
            <FaSearch />
          </button>
          <button>
            <FiShoppingBag />
          </button>
        </nav>
      </section>
    </header>
  )
}

export default Header
