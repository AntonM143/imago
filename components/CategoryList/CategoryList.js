import styles from './CategoryList.module.scss'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useContext } from 'react'
import UIContext from 'store/ui-context'

const CategoryList = (props) => {
  const { toggleMenu } = useContext(UIContext);
  const router = useRouter();

  const go = () => {
    router.push(`/categories/${props.query}`)
    toggleMenu();
  }
  return (
    <li onClick={go} className={styles.CategoryList}>
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
    </li>
  )
}

export default CategoryList
