import ProductCard from "../ProductCard/ProductCard";
import styles from './ProductList.module.scss';

const ProductList = (props) => {

  return (
    <div className={styles.container}>
      {props.data.map((product) => (
        <ProductCard 
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          img={product.img}
        />
      ))}
    </div>
  )
}

export default ProductList
