import { useContext } from 'react';
import classes from './NavigationDrawer.module.scss';
import UIContext from '../../store/ui-context';
import {MdClose} from 'react-icons/md';
import CategoryList from '../CategoryList/CategoryList';

const NavigationDrawer = () => {
const { menuIsOpen, toggleMenu } = useContext(UIContext);
const categorys = [
  {
    id: 'Abs',
    title: 'Abstrakta',
    cover: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80'
  },
  {
    id: 'Ark',
    title: 'Arkitektur',
    cover: 'https://images.unsplash.com/photo-1625854428677-7f945fb60c12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
  },
  {
    id: 'Bot',
    title: 'Botaniska',
    cover: 'https://images.unsplash.com/photo-1579167728798-a1cf3d595960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80',
  },
  {
    id: 'Art',
    title: 'Art Deco',
    cover: 'https://images.unsplash.com/photo-1584448062042-bf847d8ae0ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4128&q=80',
  },
]
  return (
    <div className={ !menuIsOpen ? classes.navigationDrawer : `${classes.active} ${classes.navigationDrawer}`}>
      <main>
        <header className={classes.navigationHeader}>
          <div onClick={toggleMenu}>
            <MdClose />
          </div>
          <div>
            <h1>Kategorier</h1>
          </div>
        </header>
        <section>
          <ul style={{display: 'flex'}}>
            {categorys.map(category => (
              <CategoryList key={category.id} title={category.title} imgUrl={category.cover}/>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default NavigationDrawer;
