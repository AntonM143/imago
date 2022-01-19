import ProductList from "../ProductList/ProductList"
import styles from './ProductListPage.module.scss';
const ProductListPage = (props) => {
  console.log(props.data);
  return (
    <main className={styles.container}>
      <header>
        <h1>{props.data[0].categoryId}</h1>
      </header>
      {/* TODO SORT */}
      <ProductList data={props.data} />
    </main>
  )
}

export default ProductListPage
