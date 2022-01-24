import Button from "@/components/Button/Button"
import Head from "next/head";
import Image from "next/image"
import styles from './index.module.scss';


export default function Home() {
  return (
    <>
    	<Head>
				<title>IMAGO POSTERS</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
      <div className={styles.indexContainer}>
        <div className={styles.hero}>
          <Image 
            src={'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80'}
            alt="cover"
            height={1000}
            width={1000}
            objectFit="cover"
            objectPosition='center'
          />
        </div>
      </div>
    </>
  )
}
