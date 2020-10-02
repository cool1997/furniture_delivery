import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { compose } from 'redux'
import { Field, reduxForm } from 'redux-form'

import { Component } from '../../common/FormsControls/FormsControls'
import {changeParam} from '../../slice/delivery/deliverySlice'

import styles from './DeliveryForm.module.scss'


const DeliveryForm = ({setIsMainPage, handleSubmit, initialize, ...props}) => {
  const {from, to, currency, rate} = useSelector((state) => state.delivery.deliveryParam)
  
  const dispatch = useDispatch()

  const [isFilled, setIsFilled] =useState(false)


  useEffect(() => {
    setIsMainPage(true)

    return () => setIsMainPage(false)
  }, [setIsMainPage])

  useEffect(() => {
    if(from && to && currency && rate) {
      setIsFilled(true)
    } else {
      setIsFilled(false)
    }
  }, [from, to, currency, rate])

  useEffect(() => {
    initialize({
      from,
      to,
      currency,
      rate,
    })
  })


  const Handle = {
    onSubmit: (formData) => {
      // dispatch(changeParam({formData}))
    },
    changeField: (evt) => {
      dispatch(changeParam({param: evt.target.name, value: evt.target.value}))
    }
  }


  return (
    <form 
      className={`${styles.DeliveryForm} ${isFilled ? styles.filled : ``}`}
      onSubmit={handleSubmit(Handle.onSubmit)}>
      <h2 className={`${styles.title}`}>
        Рассчитайте <br/> стоимость доставки из Китая
      </h2>
      <div className={`${styles.containerForm}`}>
        <div className={`${styles.containerFields}`}>

          <div className={`${styles.containerItem}`}>
            <label 
              className={`${styles.label}`}
              htmlFor={`from`}>
              Откуда
            </label>
            <div className={`${styles.containerField}`}>
              <Field
                className={`${styles.field}`}
                onChange={(evt) => Handle.changeField(evt)}
                id={`from`}
                component={Component.input}
                type="text"
                name="from"/>  
            </div>
          </div>
          
          <div className={`${styles.containerItem}`}>
            <label 
              className={`${styles.label}`}
              htmlFor={`to`}>
              Куда
            </label>
            <div className={`${styles.containerField}`}>
              <Field
                className={`${styles.field}`}
                onChange={(evt) => Handle.changeField(evt)}
                id={`to`}
                component={Component.input}
                type="text"
                name="to"/>
              </div>  
          </div>

          <div className={`${styles.containerItem}`}>
            <label 
              className={`${styles.label}`}
              htmlFor={`currency`}>
              Валюта
            </label>
            <div className={`${styles.containerField}`}>
              <Field
                className={`${styles.field}`}
                onChange={(evt) => Handle.changeField(evt)}
                id={`currency`}
                component={Component.input}
                type="text"
                name="currency"/>
              </div>  
          </div>

          <div className={`${styles.containerItem}`}>
            <label 
              className={`${styles.label}`}
              htmlFor={`rate`}>
              Курс
            </label>
            <div className={`${styles.containerField}`}>
              <Field
                className={`${styles.field}`}
                onChange={(evt) => Handle.changeField(evt)}
                id={`rate`}
                component={Component.input}
                type="text"
                name="rate"/>
              </div>  
          </div>

        </div>

        <button className={`${styles.btnSend}`}>
          Далее
        </button>
      </div>
      
      <button className={`${styles.btnHelp}`}
        type={`button`}>
        {isFilled
          ? `Теперь нажмите кнопку далее`
          : `Для начала заполните поля выше`
        }
      </button>
    </form>
  )
}


const Container = compose(
  reduxForm({ form: `deliveryParams`, enableReinitialize: true }),
  memo
)(DeliveryForm)

export {Container as DeliveryForm}