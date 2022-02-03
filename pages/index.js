import Head from "next/head";
import Hero from "@/components/Hero/Hero";
import '../public/imago.svg'
export default function Home() {
  return (
    <>
    	<Head>
				<title>IMAGO POSTERS</title>
        <link rel="shortcut icon" type="image/svg+xml" href="/imago.svg" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
      <Hero title="Kolla in vårat utbud av posters" buttonHref="/allProducts" btnText="Alla Posters" />
    </>
  )
}
