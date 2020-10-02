import React, { memo, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Route, Switch } from 'react-router-dom'
import { compose } from 'redux'

import { initializedSuccess } from '../slice/app/appSlice'
import { DeliveryParameters } from '../component/DeliveryParameters/DeliveryParameters'
import { DeliveryForm } from '../component/DeliveryForm/DeliveryForm'
import { Contacts } from '../component/Contacts/Contacts'

import styles from './App.module.scss'


const App = ({ ...props }) => {
	const dispatch = useDispatch()

	const { initialized } = useSelector((state) => state.app)
	const [isMainPage, setIsMainPage] = useState(false)


	useEffect(() => {
		dispatch(initializedSuccess())
	}, [dispatch])


	return (
		initialized &&
		<div className={`${styles.App} ${isMainPage ? styles.mainPage : ``}`}>
			<header className={`${styles.header}`}>
				<h1 className={`visually-hidden`}>Калькулятор стоимости доставки мебели</h1>
				<img 
					className={`${styles.logoImg}`} 
					src={require(`../assets/img/baikal_logo.png`)} 
					alt={`логотип компании байкал`}
				/>
				{
				// <DeliveryParameters />
				}
				<NavLink 
					className={`${styles.contactsLink}`}
					to={`./contacts`}>
					Связаться
				</NavLink>
			</header>
			<main className={`${styles.main}`}>
				<Switch>
					<Route exact path='/' render={() => <DeliveryForm setIsMainPage={setIsMainPage}/>} />
					<Route path='/contacts' render={() => <Contacts/>} />
				</Switch>
			</main>
		</div>
	)
}


export default compose(
	memo
)(App)