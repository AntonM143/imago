import React from 'react';
import Image from 'next/image';
import classes from './Header.module.scss';
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from 'react-icons/fi';
import Link from 'next/link';


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
            <li><Link href={"/categories"}>Kategorier</Link></li>
          </ul>
        </nav>
        <nav className={classes.headerSecondaryNav}>
          <button>
            <FaSearch />
          </button>
          <button>
			<Link href={'/cart'}><FiShoppingBag/></Link>

          </button>
        </nav>
      </section>
    </header>
  )
}

export default Header
