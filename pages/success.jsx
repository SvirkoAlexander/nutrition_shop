import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'



import { useStateContext } from '../context/StateContext'
import { runFireworks } from '../lib/utils'


const Success = () => {
	const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()

	useEffect(() => {
		localStorage.clear()
		setCartItems([])
		setTotalPrice(0)
		setTotalQuantities(0)
		runFireworks()
	},[])



	return (
		<div className='success-wrapper' >
			<div className="success">
				<p className="icon">
					<BsBagCheckFill/>
				</p>
				<h2>Спасибо за заказ!</h2>
				<p className="email-msg">Проверьте ваш Email для подтверждения.</p>
				<p className="description">
					Если у вас остались вопросы, напишите сюда:
					<a href="mailto:order@example.com" className="email">order@example.com</a>
				</p>
				<Link href="/">
					<button type='button' width="300px" className="btn">Продолжить покупки</button>
				</Link>
			</div>

		</div>
		
		
	)
}

export default Success
