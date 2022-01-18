import Button from "@/components/Button/Button"
import Image from "next/image"
import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.indexContainer}>
      <div className={styles.hero}>
        <Image 
          src={'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80'}
          alt="cover"
          layout="responsive"
          height={1000}
          width={1000}
          objectFit="cover"
        />
      </div>
      <div className={styles.shopPush}>
        Handla massa fina posters
        <Button> Shop  </Button>
      </div>
    </div>
  )
}
