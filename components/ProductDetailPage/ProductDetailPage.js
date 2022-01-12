import Image from 'next/image';
import ProductSizePicker from '../ProductSizePicker/ProductSizePicker';
import UIContext from '../../store/ui-context';
import Button from '../Button/Button';
import styles from './ProductDetailPage.module.scss';
import { FiShoppingBag } from 'react-icons/fi';
import { RiCloseCircleFill } from 'react-icons/ri';
import { RiCheckboxCircleLine } from 'react-icons/ri';
import { useContext } from 'react';

const ProductDetailPage = (props) => {
  const { screenWidth } = useContext(UIContext)

  const onAddToCart = (size) => {
    console.log('Product added!');
  }
  const productInStock = props.stock > 0;
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
          objectFit='cover'
          />
        </div>
      </div>
      {/* ----------- ProductInfo ------------- */}
      <div className={styles.productInfoContainer}>
        <section className={styles.productInfoTop}>
          <div className={styles.productTitle}>
            <h3>{props.title}</h3>
          </div>
          <div className={styles.productPrice}>
            <h1>{props.price} SEK</h1>
          </div>
        </section>
        <ProductSizePicker sizes={props.sizes} />
        <div className={styles.productInStock}>
        { productInStock ? <p className={styles.inStock}>Finns i lager!<RiCheckboxCircleLine /></p> : <p className={styles.outStock}>Ej i lager!<RiCloseCircleFill /></p>  }
          </div>
        <div className={styles.productDescription}>
          <h3>Produktinformation</h3>
          <p className={styles.descriptionText}>
            { screenWidth > 768 ? props.description : props.description.substring(0, 100) }
          </p>
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
