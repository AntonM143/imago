import Head from 'next/head';
import React from 'react';
import Hero from "@/components/Hero/Hero";

export default function Custom404() {
	return (
		<div>
			<Head>
				<title>404</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Hero
				btnText={'Till alla produkter'}
				title={'404 - Vi kunde tyvärr inte hitta sidan...'}
				buttonHref={'/allProducts'}
			/>
		</div>
	)
}
