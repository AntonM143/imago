import Image from 'next/image';
import { FiShoppingBag } from 'react-icons/fi';
import ProductSizePicker from '../ProductSizePicker/ProductSizePicker';
import Button from '../Button/Button';
import styles from './ProductDetailPage.module.scss';

const ProductDetailPage = (props) => {
	console.log(props);
  return (
    <div className={styles.productDetailContainer}>
      {/* ----------- ProductGallery ------------- */}
      <div className={styles.galleryContainer}>
        <div className={styles.productImg}>
          <Image
          src={props.images[0]}
          alt={props.title}
          width={476}
          height={568}
          layout='responsive'
          />
        </div>
      </div>
      {/* ----------- ProductInfo ------------- */}
      <div className={styles.productInfoContainer}>
        <div className={styles.productTitlePrice}>
          <div>{props.title}</div>
          <div>{props.price} SEK</div>
        </div>
        <ProductSizePicker sizes={props.sizes} />
        <div>
          <h3>Beskrivning</h3>
          <p>{props.description}</p>
        </div>
        <div>
          <Button color="sand">
            Lägg till i kundvagn
            <FiShoppingBag />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
