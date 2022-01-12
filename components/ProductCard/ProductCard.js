import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './ProductCard.module.scss';

const ProductCard = ({ id, title, price, img }) => {
  const router = useRouter();
  const handleClick = (id) => {
    router.push({
      pathname: `/product/${id}`
    })
  }
  return (
    <div onClick={() => {handleClick(id)}} className={styles.ProductCardContainer}>
      <section className={styles.img}>
      <section>
        <Image
            src={img[0]}
            alt={title}
            width={276}
            height={368}
            layout="responsive"
            objectFit='cover'
            priority
          />
      </section>
      <section>
        <div className={styles.productTitle}>
          { title }
        </div>
        <div>
          <p>från { price } kr</p>
        </div>
      </section>
      </section>
    </div>
  )
}

export default ProductCard
