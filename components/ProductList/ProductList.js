import ProductCard from "../ProductCard/ProductCard";
import styles from './ProductList.module.scss';

const ProductList = (props) => {
	console.log(props, "sadsadas");
  return (
    <div className={styles.container}>
      {props.data.map((product) => (
        <ProductCard
          key={product._id}
          id={product._id}
          title={product.title}
          price={product.variants[0].price}
          img={product.images}
        />
      ))}
    </div>
  )
}

export default ProductList
