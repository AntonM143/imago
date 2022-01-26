import styles from './CategoryList.module.scss'
import { useRouter } from 'next/router'
import Image from 'next/image'

const CategoryList = (props) => {
  const router = useRouter();
  const categoryNavigation = () => {
    router.push(`/categories/${props.query}`)
    props.onClose()
  }

  return (
    <div onClick={categoryNavigation} className={styles.CategoryList}>
      <div className={styles.categoryImage}>
        <Image
          src={props.img}
          alt={props.title}
          width={300}
          height={100}
          objectFit='cover'
          layout='responsive'
        />
      </div>
      <p className={styles.categoryTitle}>{props.title}</p>
    </div>
  )
}

export default CategoryList
