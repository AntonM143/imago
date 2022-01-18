import { useContext } from 'react';
import Image from 'next/image';
import UIContext from '../../store/ui-context';
import classes from './Header.module.scss';
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from 'react-icons/fi';
import Link from 'next/link';
import SearchBar from '../Searchbar/SearchBar';
import testImg from '../../testbild.jpg'
import { useRouter } from 'next/router';
import CartContext from 'store/cart-context';
import { cartQuantity } from 'handlers/cart';

const Header = () => {
	const { toggleMenu } = useContext(UIContext);
	const { cart } = useContext(CartContext);
	const router = useRouter();

	const handleClick = () => {
	  router.push({
		  pathname: `/`,
	  })


	  }

	  let quantityInCart = cartQuantity(cart.items)
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
				{cart.items.length >= 1 ? <div className={classes.cartCount}>{quantityInCart}</div> : ""}
			</div>
          </nav>
        </section>
      </header>
    </>
  )
}

export default Header
