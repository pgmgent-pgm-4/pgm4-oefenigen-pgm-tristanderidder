import React from 'react'
import styles from '../css/card.module.css'

export default function TeamMember({image, firstName, lastName, role, mail, number}) {
  return (
    <div className={styles.card}>
        <img className={styles.card__img} src={image} alt="member"/>
        <div className={styles.card__align}>
            <h2 className={styles.card__title}>{firstName} {lastName}</h2>
              <p className={styles.card__role}>{role}</p>
            <p>{mail}</p>
            <p>{number}</p>
        </div>
    </div>
  )
}
