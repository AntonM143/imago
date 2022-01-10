import { useContext } from 'react';
import Image from 'next/image';
import UIContext from '../../store/ui-context';
import classes from './Header.module.scss';
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from 'react-icons/fi';
import Link from 'next/link';
import SearchBar from '../Searchbar/SearchBar';
import testImg from '../../testbild.jpg'

const Header = () => {
const { toggleMenu } = useContext(UIContext);
let testProd = [
	{
		title: "PRODUKTTITEL",
		imgUrl: testImg,
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur",
		price: 200,
		stock: 5,
		id: 1,
		quantity: 1,
		type: ''
	},
	{
		title: "PRODUKTTITEL2",
		imgUrl: testImg,
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur",
		price: 199,
		stock: 5,
		id: 1,
		quantity: 1,
		type: ''
	}
]
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
				<FaSearch>
				</FaSearch>
					<SearchBar placeholder={"sök..."} data={testProd}/>
            </button>
            <button>
            	<Link href={'/cart'}><FiShoppingBag/></Link>
            </button>
          </nav>
        </section>
      </header>
    </>
  )
}

export default Header
