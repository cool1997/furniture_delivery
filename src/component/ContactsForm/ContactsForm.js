import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { compose } from 'redux'
import { Field, reduxForm } from 'redux-form'

import { Component } from '../../common/FormsControls/FormsControls'
import { changeContactWithMe } from '../../slice/delivery/deliverySlice'

import styles from './ContactsForm.module.scss'


const ContactsForm = ({handleSubmit, ...props}) => {
  const dispatch = useDispatch()
  
  const {contactWithMe} = useSelector((state) => state.delivery)


  const Handle = {
    onSubmit: (formData) => {
      dispatch(changeContactWithMe())
    }
  }


  return (
    <form 
      className={`${styles.ContactsForm}`}
      onSubmit={handleSubmit(Handle.onSubmit)}>
      {!contactWithMe
        ? <>
          <div className={`${styles.containerField}`}>
            <Field 
              className={`${styles.field}`}
              type={`text`}
              placeholder={`Имя и фамилия`}
              name={`fullName`}
              component={Component.input}/>
            <Field 
              className={`${styles.field}`}
              type={`email`}
              placeholder={`Почта`}
              name={`email`}
              component={Component.input}/>
            <Field 
              className={`${styles.field}`}
              type={`tel`}
              placeholder={`Телефон`}
              name={`phone`}
              component={Component.input}/>
          </div>

          <p className={`${styles.areaDesc}`}>Опишите ваш запрос</p>
          <Field 
            className={`${styles.fieldArea}`}
            name={`question`}
            component={Component.textarea}/>

          <button className={`${styles.btnContact}`}>Связаться по доставке</button>

          <p className={`${styles.personalData}`}>Нажимая на кнопку, вы даете 
            <span className={`${styles.personalDataLink}`}> согласие на обработку </span> 
            своих персональных данных
          </p>
        </>
        :<button 
          className={`${styles.btnContact}`}>
          Вернуться к контактам
        </button>
      }
    </form>
  )
}


const Container = compose(
  reduxForm({ form: `Contacts`, enableReinitialize: true }),
  memo
)(ContactsForm)

export {Container as ContactsForm}