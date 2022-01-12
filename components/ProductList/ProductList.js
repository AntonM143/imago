import ProductCard from "../ProductCard/ProductCard";
import styles from './ProductList.module.scss';

const ProductList = (props) => {
  return (
    <div className={styles.container}>
      {props.data.map((product) => (
        <ProductCard
          key={product._id}
          id={product._id}
          title={product.title}
          price={product.price}
          img={product.images}
        />
      ))}
    </div>
  )
}

export default ProductList
