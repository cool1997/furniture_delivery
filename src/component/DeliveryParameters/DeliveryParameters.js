import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { compose } from 'redux'

import styles from './DeliveryParameters.module.scss'


const DeliveryParameters = ({...props}) => {
  const { from, to, currency } = useSelector((state) => state.delivery.deliveryParam)

  return (
    <ul className={`${styles.DeliveryParameters}`}>
      <li>{from}</li>
      <li>{to}</li>
      <li>{currency}</li>
    </ul>
  )
}


const Container = compose(
  memo
)(DeliveryParameters)

export {Container as DeliveryParameters}