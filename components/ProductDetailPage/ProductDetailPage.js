import Image from 'next/image';
import ProductSizePicker from '../ProductSizePicker/ProductSizePicker';
import UIContext from '../../store/ui-context';
import Button from '../Button/Button';
import styles from './ProductDetailPage.module.scss';
import { FiShoppingBag } from 'react-icons/fi';
import { RiCloseCircleFill } from 'react-icons/ri';
import { RiCheckboxCircleLine } from 'react-icons/ri';
import { useContext, useState } from 'react';
import CartContext from 'store/cart-context';
import { cartQuantity } from 'handlers/cart';

const ProductDetailPage = (props) => {
  const cartCtx = useContext(CartContext)
  const [selectedSize, setSelectedSize] = useState(null)
  const { screenWidth } = useContext(UIContext)

  const selectedSizeHandler = (size) => {
    console.log(size);
    setSelectedSize(size);
  }

  const onAddToCart = () => {
    
    cartCtx.addProductToCart({
      id: selectedSize.id,
      title: props.title,
      price: selectedSize.price,
      size: selectedSize.size,
      quantity: 1
    })
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
            { !selectedSize ? <h1>fr. {props.sizes[0].price} SEK</h1> : <h1>{selectedSize.price} SEK</h1> }
          </div>
        </section>
        <ProductSizePicker onSelectedSize={selectedSizeHandler} sizes={props.sizes} />
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
          <Button onClick={ onAddToCart } color="sand">
            Lägg till i kundvagn
            <FiShoppingBag />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
