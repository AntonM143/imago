import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './ProductCard.module.scss';

const ProductCard = ({ id, title, price, img }) => {
  const router = useRouter();
  const handleClick = (id) => {
    console.log(id);
    router.push({
      pathname: `/products/${id}`
    })
  }

  return (
    <div onClick={() => {handleClick(id)}} className={styles.ProductCardContainer}>
      <section className={styles.img}>
      <section>
        <Image
            src={img}
            alt={title}
            width={276}
            height={368}
            layout="responsive"
            objectFit='cover'
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
