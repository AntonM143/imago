import React, { useState } from 'react'
import styles from './ProductSizePicker.module.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { RiCloseCircleFill,  RiCheckboxCircleLine } from 'react-icons/ri';

const ProductSizePicker = ({ variants, onSelectedSize, onSelectSize, onOpenOrClose, isOpen }) => {

const [selectedSize, setSelectedSize] = useState()
const flip = isOpen ? styles.flip : "";


const sizeHandler = (size) => {
	if(size.stock < 1) {
		return
	}
	else {
		setSelectedSize(size.size)
		onSelectedSize(size)
		onOpenOrClose(!isOpen)
	}
}

  return (
    <div className={styles.sizePickerContainer}>
      <div onClick={() => onOpenOrClose(!isOpen)} className={styles.currentSize}>
        { !selectedSize ? <p>Välj storlek:</p> : <p>{selectedSize} cm</p>}
        <span className={flip}><IoIosArrowDown /></span>
      </div>
        <div className={styles.dropdownContainer}>
          {isOpen &&
            variants.map((variant, i) => (
              <div
			  	onClick={() => sizeHandler({size: variant.size, price: variant.price, id: variant.id, stock: variant.stock})} key={i}><p>{variant.size} cm </p>{ variant.stock > 0 ? <p className={styles.inStock}>Finns i lager!<RiCheckboxCircleLine /></p> : <p className={styles.outStock}>Ej i lager!<RiCloseCircleFill /></p>  }</div>
            ))}
        </div>
    </div>
  )
}


export default ProductSizePicker
