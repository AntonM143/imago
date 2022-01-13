import classes from './CategoryList.module.scss'
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
    <li onClick={go} className={classes.CategoryList}>
      <div>
        <Image
          src={props.img}
          alt={props.title}
          width={300}
          height={100}
          objectFit='cover'
        />
      </div>
      <p>{props.title}</p>
    </li>
  )
}

export default CategoryList
