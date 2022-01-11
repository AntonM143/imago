import React from 'react'
import styles from './Button.module.scss';

const Button = (props) => {
  const defaultColor = props.color ? props.color : 'sand';
  return (
    <div className={`${styles.appBtn} ${styles[defaultColor]}`} onClick={props.onClick}>
      {props.children}
    </div>
  )
}

export default Button
