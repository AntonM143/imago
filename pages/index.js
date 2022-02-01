import Head from "next/head";
import Hero from "@/components/Hero/Hero";


export default function Home() {
  return (
    <>
    	<Head>
				<title>IMAGO POSTERS</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
      <Hero title="Handla fina posters" btnText="Handla nuuuu" />
    </>
  )
}
