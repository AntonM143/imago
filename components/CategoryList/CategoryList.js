import classes from './CategoryList.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'

const CategoryList = (props) => {
  const router = useRouter();

  const go = () => {
    router.push(`/categories/${props.query}`)
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
