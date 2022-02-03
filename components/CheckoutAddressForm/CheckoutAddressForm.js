import React, { useEffect, useState, useMemo } from 'react'
import { useForm, FormProvider } from "react-hook-form";
import CheckoutInput from '@/components/CheckoutInput/CheckoutInput';
import styles from './CheckoutAddressForm.module.scss';
import Button from '../Button/Button';
import { useRouter } from 'next/router';
import { getLocalstorage, setLocalstorage } from '@/utils/localstorage';
import PostNord from '../../public/images/postnord.svg'
import DeliveryBox from '../../public/images/deliverybox.svg'


const CheckoutAddressForm = (props) => {
  const router = useRouter();
  const [data, setData] = useState();
  const items = [{name:'firstname', title: 'Förnamn'}, {name:'lastname', title: 'Efternamn'}, {name:'address', title: 'Adress'}, {name:'postal', title: 'Postnummer'}, {name:'city', title: 'Postort'},{name:'mail', title: 'E-postadress'}];
  const methods = useForm({ defaultValues: useMemo(() => {
    data
  },[data])})
  
  useEffect(() => {
    if (localStorage.getItem("checkoutSession") !== null) {
      const storedData = getLocalstorage('checkoutSession')
      setData(storedData);
    }
    methods.reset(storedData)
  }, [])

  const onSubmit = data => {
    setLocalstorage(data, 'checkoutSession')
    router.push('/checkout/payment')
  };

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
          <div className={styles.shippingContainer}>
            <header className={styles.shippingHeader}>
              <h1>Frakt</h1>
            </header>
            <div className={styles.shippingItem}>
              <div className={styles.shippingLabel}>
                <section>
                  <DeliveryBox />
                </section>
              </div>
              <div>
                <input {...methods.register('radio', { required: true })} type="radio" value='{"type": "pickup", "price": "0"}'/>
              </div>
              <div>
                <label>PostNord</label>
                <p>Frakt 1-3 dagar</p>
              </div>
            </div>
            <div className={styles.shippingItem}>
              <div className={styles.shippingLabel}>
                <section>
                  <PostNord />
                </section>
              </div>
              <div>
                <input {...methods.register('radio', { required: true })}  type="radio" value='{"type": "delivery", "price": "99"}'/>
              </div>
              <div>
                <label>PostNord</label>
                <p>Frakt 1-3 dagar</p>
              </div>
            </div>
          </div>
         {/* <input type="submit" /> */}
          <Button onSubmit={methods.handleSubmit(onSubmit)}>Vidare Till Betalning</Button>
        </form>
      </FormProvider>
      </div>
  )
}

export default CheckoutAddressForm
