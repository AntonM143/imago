import { useContext, useRef } from 'react';
import Image from 'next/image';
import UIContext from '../../store/ui-context';
import classes from './Header.module.scss';
import { FiShoppingBag } from 'react-icons/fi';
import Link from 'next/link';
import SearchBar from '../Searchbar/SearchBar';
import { useRouter } from 'next/router';
import CartContext from 'store/cart-context';
import { cartQuantity } from 'handlers/cart';
import Lottie from 'lottie-react';
import animationData from './lottie.json';
import { useLottie } from "lottie-react";


const Header = () => {

  const options = {
    animationData: animationData,
    loop: false,
    autoplay: false,
  };
  const { View, playSegments, setDirection, stop } = useLottie(options)
  const lottieRef = useRef();
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
    if (menuIsOpen) {
      playSegments([60,0], true)
    }
  }
	let quantityInCart = cartQuantity(cart.items)

  return (
    <>
      <header className={classes.headerContainer}>
        <section className={classes.headerBar}>
          <nav className={classes.headerMainNav}>
            <button onClick={mobileNavClick} className={classes.headerMenuBtn}>
              {View}
              {/* <Lottie loop={false} autoplay={false} lottieRef={lottieRef} animationData={animationData}/> */}
            </button>
            <div className={classes.logo}>
              <Image
                src="/images/icnimage-logo.png"
                alt="logo"
                width={436}
                height={105}
              />
            </div>
            <ul>
              	<li onClick={handleClick}>
					Hem
				</li>
              <li onClick={toggleMenu}>Produkter</li>
              <li onClick={() => {
				  router.push({
					  pathname: '/allProducts'
				  })
			  }}>Alla produkter</li>
            </ul>
          </nav>
          <nav className={classes.headerSecondaryNav}>
			<SearchBar placeholder={"sök..."}/>
			<div className={classes.cart}>
				<Link href={'/checkout'}>
					<a >
						<FiShoppingBag/>
					</a>
				</Link>
				{<div className={classes.cartCount}>{quantityInCart}</div>}
			</div>
          </nav>
        </section>
      </header>
    </>
  )
}

export default Header
