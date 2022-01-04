import { useContext } from 'react';
import Image from 'next/image';
import UIContext from '../../store/ui-context';
import classes from './Header.module.scss';
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from 'react-icons/fi';

const Header = () => {
const { toggleMenu } = useContext(UIContext);
  return (
    <>
      <header className={classes.headerContainer}>
        <section className={classes.headerBar}>
          <nav className={classes.headerMainNav}>
            <button onClick={toggleMenu} className={classes.headerMenuBtn}>
              <svg viewBox="0 0 100 80" width="24" height="24">
                <rect width="100" height="5"></rect>
                <rect y="15" width="100" height="5"></rect>
                <rect y="30" width="100" height="5"></rect>
              </svg>
            </button>
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
              <li onClick={toggleMenu}>Produkter</li>
            </ul>
          </nav>
          <nav className={classes.headerSecondaryNav}>
            <button >
              <FaSearch />
            </button>
            <button>
              <FiShoppingBag />
            </button>
          </nav>
        </section>
      </header>
    </>
  )
}

export default Header
