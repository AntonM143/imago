import { useContext, useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import UIContext from '../../store/ui-context';
import classes from './Header.module.scss';
import { FiShoppingBag } from 'react-icons/fi';
import Link from 'next/link';
import SearchBar from '../Searchbar/SearchBar';
import { useRouter } from 'next/router';
import CartContext from 'store/cart-context';
import { cartQuantity } from 'handlers/cart';
import animationData from './lottie.json';
import { useLottie } from "lottie-react";
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer';
import Imago from '../../public/images/imago.svg';


const Header = (props) => {
  const headerRef = useRef();
  const [headerHeight, setHeaderHeight] = useState();
  const [scrollPosition, setScrollPostion] = useState();

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
  const options = {
    animationData: animationData,
    loop: false,
    autoplay: false,
  };
  const { View, playSegments } = useLottie(options)

	const { toggleMenu, menuIsOpen } = useContext(UIContext);
	const { cart } = useContext(CartContext);
	const router = useRouter();
	const handleClick = () => {
	  router.push({
		  pathname: `/`,
	  })
	}

  const mobileNavClick = () => {
    toggleMenu();
    if (!menuIsOpen) return playSegments([0,60], true)
    if (menuIsOpen) return playSegments([60,0], true)
  }

	let quantityInCart = cartQuantity(cart.items)

  return (
    <>
      <header ref={headerRef} className={ !fixedHeader ? classes.headerContainer : `${classes.headerContainer} ${classes.fixedHeader}`} >
        <section className={ classes.headerBar}>
          <nav className={classes.headerMainNav}>
            <button onClick={mobileNavClick} className={classes.headerMenuBtn}>
              {View}
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
          <div >
			    <SearchBar  placeholder={"sök..."}/>
          </div>
            <div className={classes.cart}>
              <Link href={'/checkout'}>
                <a>
                  <FiShoppingBag/>
                  <div className={classes.cartCount}>{quantityInCart}</div>
                </a>
              </Link>
            </div>
          </nav>
        </section>
      </header>
      <NavigationDrawer onClose={mobileNavClick} />
    </>
  )
}

export default Header
