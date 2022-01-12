import React, { useState } from 'react'
import styles from './ProductSizePicker.module.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { CSSTransition } from 'react-transition-group';

const ProductSizePicker = ({ sizes }) => {
const [isOpen, setIsOpen] = useState(false);
const [selectedSize, setSelectedSize] = useState()
const flip = isOpen ? styles.flip : '';
  return (
    <div className={styles.sizePickerContainer}>
      <div onClick={() => setIsOpen(!isOpen)} className={styles.currentSize}>
        { !selectedSize ? <p>Välj storlek:</p> : <p>{selectedSize} cm</p>}
        <span className={flip}><IoIosArrowDown /></span>
      </div>
        <div className={styles.dropdownContainer}>
          {isOpen &&
            sizes.map((size, i) => (
              <div onClick={() => {setSelectedSize(size); setIsOpen(false)}} key={i}><p>{size} cm</p></div>
              ))}
        </div>
    </div>
  )
}


export default ProductSizePicker
