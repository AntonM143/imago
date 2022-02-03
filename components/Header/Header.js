import { useContext, useRef, useEffect, useState } from 'react';
import UIContext from '../../store/ui-context';
import classes from './Header.module.scss';
import { FiShoppingBag } from 'react-icons/fi';
import Link from 'next/link';
import SearchBar from '../Searchbar/SearchBar';
import CartContext from 'store/cart-context';
import { cartQuantity } from 'handlers/cart';


import NavigationDrawer from '../NavigationDrawer/NavigationDrawer';
import Imago from '../../public/images/imago.svg';


const Header = (props) => {
  const headerRef = useRef();
  const [headerHeight, setHeaderHeight] = useState();
  const [scrollPosition, setScrollPostion] = useState();
  const { cart } = useContext(CartContext);

  useEffect(() => {
    const scrollhandler = () => {
      setScrollPostion(window.scrollY);
    }
    window.addEventListener('scroll', scrollhandler);
    setHeaderHeight(headerRef.current.clientHeight)
    return () => {
      window.removeEventListener('scroll', scrollhandler);
    }
  }, [])

  const fixedHeader = scrollPosition > headerHeight + 10;
	let quantityInCart = cartQuantity(cart.items)

  return (
    <>
    <div style={{height: headerHeight}}>
      <header ref={headerRef} className={ !fixedHeader ? classes.headerContainer : `${classes.headerContainer} ${classes.fixedHeader}`} >
        <section className={ classes.headerBar}>
          <nav className={classes.headerMainNav}>
            <button onClick={props.onClose} className={classes.headerMenuBtn}>
              {props.View}
            </button>
          </nav>
          <div className={classes.brandContainer}>
            <Link href={'/'}>
            <a>
              <div className={classes.logo}>
                <Imago />
              </div>
            </a>
            </Link>
          </div>
          <nav className={classes.headerSecondaryNav}>
          <div className={classes.searchContainer}>
			    <SearchBar  placeholder={"sök..."}/>
          </div>
            <div className={classes.cart}>
              <Link href={'/checkout'}>
                <a>
                  <FiShoppingBag />
                  <div className={classes.cartCount}>{quantityInCart}</div>
                </a>
              </Link>
            </div>
          </nav>
        </section>
      </header>
    </div>
      <NavigationDrawer onClose={props.onClose} />
    </>
  )
}

export default Header
