import React, { useEffect, useState } from 'react'
import { useForm, FormProvider } from "react-hook-form";
import CheckoutInput from '@/components/CheckoutInput/CheckoutInput';
import styles from './CheckoutAddressForm.module.scss';
import Button from '../Button/Button';



const CheckoutAddressForm = (props) => {
  const items = [{name:'firstname', title: 'Förnamn'}, {name:'lastname', title: 'Efternamn'}, {name:'address', title: 'Adress'}, {name:'postal', title: 'Postnummer'}, {name:'city', title: 'Postort'},{name:'mail', title: 'E-postadress'}];
  const methods = useForm({ defaultValues: props.storedData })
  const onSubmit = data => props.onFormData(data);

  return (
    <div className={styles.formContainer}>
      <header>
        <h1>LEVERANSADRESS</h1>
      </header>
      <FormProvider {...methods}>
        <form autoComplete='off' className={styles.checkoutForm} onSubmit={methods.handleSubmit(onSubmit)}>
          {items.map((item, index) => (
            <CheckoutInput
              key={index}
              name={item.name}
              title={item.title}
            />
          ))}
          <div className={styles.shippingItem}>
            <label htmlFor="">Hämta på vårat lager</label>
            <input {...methods.register('radio', { required: true })} type="radio" value='{"type": "pickup", "price": "0"}'/>
          </div>
          <div className={styles.shippingItem}>
            <label htmlFor="">PostNord</label>
            <input {...methods.register('radio', { required: true })}  type="radio" value='{"type": "delivery", "price": "99"}'/>
          </div>
         <input type="submit" />
        </form>
      </FormProvider>
      </div>
  )
}

export default CheckoutAddressForm
