import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './Layout.module.scss'
import Overlay from '../Overlay/Overlay'
import { useContext } from 'react'
import UIContext from 'store/ui-context'
import { useLottie } from "lottie-react";
import animationData from '@/utils/animation/lottie.json';


export default function Layout( props ) {
	const options = {
    animationData: animationData,
    loop: false,
    autoplay: false,
  };
	const { View, playSegments } = useLottie(options)
	const {menuIsOpen, toggleMenu} = useContext(UIContext)

	function toggleNavAnimation() {
    toggleMenu();
    if (!menuIsOpen) return playSegments([0,60], true)
    if (menuIsOpen) return playSegments([60,0], true)
	}

	return (
		<>
			<Header View={View} onClose={toggleNavAnimation}/>
			{menuIsOpen && <Overlay onClose={toggleNavAnimation} />}
				<main className={styles.layoutMain}>
					{props.children}
				</main>
			<Footer/>
		</>
	)
}
