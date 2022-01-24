import Button from '@/components/Button/Button'
import Head from 'next/head';
import { useRouter } from 'next/router'
import React from 'react';

export default function Custom404() {
	const router = useRouter()
	//TODO stylea skiten
	return (
		<div>
			<Head>
				<title>404</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<h3>404 - Vi kunde tyvärr inte hitta sidan...</h3>
			<Button
				color={"sand"}
				onClick={() => {
					router.push({
						pathname: `/`,
					})
				}}
			>
				Startsida
			</Button>

		</div>
	)
}
