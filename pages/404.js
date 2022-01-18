import Button from '@/components/Button/Button'
import { useRouter } from 'next/router'
import React from 'react'

export default function Custom404() {
	const router = useRouter()
	//TODO stylea skiten
	return (
		<div>
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
