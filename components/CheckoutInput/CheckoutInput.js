import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import styles from './CheckoutInput.module.scss';

const CheckoutAddressForm = ({ name, title }) => {
  const [toggleFocus, setToggleFocus] = useState(false)
  const { register, watch, formState: {errors} } = useFormContext(); // retrieve all hook methods
  const inputClasses = toggleFocus || watch(name) ? `${styles.inputLabel} ${styles.inputFocus}` : styles.inputLabel
  const options = name === 'mail' ? {required: true, pattern: { value: /^\S+@\S+$/i, message: 'Måste innehålla en giltlig mailadress'}} : { required: true } 

  return (
        <div className={styles.container}>
          <div onBlur={() => setToggleFocus(false)} className={styles.checkoutInputContainer}>
            <input
              className={styles.formInputfield} 
              onFocus={() => setToggleFocus(true)}
              {...register(name, options)} />
            <label className={inputClasses} htmlFor={name}><p>{title}</p></label>
          </div>
          <div className={styles.requiredText}>
            {errors[name] && <span><p>Det här fältet är obligatoriskt</p></span>}
          </div>
        </div>
  );
}

export default CheckoutAddressForm;