import React from 'react'
import styles from './Button.module.scss';

const Button = (props) => {
  const defaultColor = props.color ? props.color : 'sand';

  return (
    <button onSubmit={props.onSubmit} className={`${styles.appBtn} ${styles[defaultColor]} ${props.rounded ? styles.rounded : ''}`} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button
