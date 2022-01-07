import ProductList from "../ProductList/ProductList"
import styles from './ProductListPage.module.scss';
const ProductListPage = (props) => {
  return (
    <main className={styles.container}>
      <header>
        <h1>KategoriNamn</h1>
      </header>
      {/* TODO SORT */}
      <ProductList data={props.data} />
    </main>
  )
}

export default ProductListPage
