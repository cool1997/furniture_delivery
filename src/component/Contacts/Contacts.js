import React, { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { compose } from 'redux'

import {ContactsForm} from '../ContactsForm/ContactsForm'
import { changeContactWithMe } from '../../slice/delivery/deliverySlice'

import styles from './Contacts.module.scss'


const Contacts = ({...srops}) => {
  const {contactWithMe} = useSelector((state) => state.delivery)


  return (
    <div className={`${styles.Contacts}`}>
      {!contactWithMe
        ?<>
          <h2 className={`${styles.title}`}>
          Свяжитесь с нами
          </h2>
          <div className={`${styles.containerLeft}`}>
            <h3 className={`${styles.secondTitle}`}>
              Наши данные:
            </h3>
            <table className={`${styles.table}`}>
              <tbody className={`${styles.tableBody}`}>
                <tr className={`${styles.tableRow}`}>
                  <td className={`${styles.tableCell}`}>Наша почта:</td>
                  <td className={`${styles.tableCell}`}>asia@baikalvl.ru</td>
                </tr>
                <tr className={`${styles.tableRow}`}>
                  <td className={`${styles.tableCell}`}>Телефон:</td>
                  <td className={`${styles.tableCell}`}>8 800 201-87-77</td>
                </tr>
              </tbody>
            </table>
            <h3 className={`${styles.secondTitle}`}>Мы в соц. сетях:</h3>
            <ul className={`${styles.socialList}`}>
              <li className={`${styles.item}`}>
                <span className={`${styles.socialLogoImg} ${styles.Instagram}`}/>
                <span className={`${styles.socialName}`}>
                  Instagram
                </span>
              </li>
              <li className={`${styles.item}`}>
                <span className={`${styles.socialLogoImg} ${styles.Facebook}`}/>
                <span className={`${styles.socialName}`}>
                  Facebook
                </span>
              </li>
              <li className={`${styles.item}`}>
                <span className={`${styles.socialLogoImg} ${styles.Whatsapp}`}/>
                <span className={`${styles.socialName}`}>
                  Whatsapp
                </span>
              </li>
              <li className={`${styles.item}`}>
                <span className={`${styles.socialLogoImg} ${styles.WeChat}`}/>
                <span className={`${styles.socialName}`}>
                  WeChat
                </span>
              </li>
            </ul>
          </div>
          <div className={`${styles.containerRight}`}>
            <ContactsForm />
            <NavLink
              className={`${styles.btnBack}`}
              to={`/`}>
              Назад
            </NavLink>
          </div>
        </>

        :<>
          <h2 className={`${styles.title}`}>Спасибо за заявку!</h2>
          <h3 className={`${styles.secondTitle}`}>Мы свяжемся с вами в ближайшее время.</h3>
          <ContactsForm />
        </>
      }
    </div>
  )
}


const Container = compose(
  memo
)(Contacts)

export {Container as Contacts}