import React from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import Button from '../Button/Button';
import { IoMdArrowForward } from 'react-icons/io';
import { useRouter } from 'next/router';
import DeliveryLottie from '../DeliveryLottie/DeliveryLottie';

const Hero = (props) => {
	const router = useRouter()

  const showLottie = router.route === '/success';

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContentContainer}>
        <h1>{props.title}</h1>
        { showLottie && <DeliveryLottie />}
        <Button
			onClick={() => {
				router.push({
					pathname: props.buttonHref,
				})
			}}
		>{props.btnText}<IoMdArrowForward/></Button>
      </div>
      <div className={styles.heroImageContainer}>
        <Image
          src={'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3400&q=80'}
          alt="cover"
          objectFit="cover"
          objectPosition={'center'}
          layout='fill'
        />
      </div>
    </div>);
};

export default Hero;
