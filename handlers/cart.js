function calcTotalAmount(cart) {
	let totalPriceItem;
	let pricesArray = [];
	cart.forEach((item) => {
	  totalPriceItem = item.quantity * item.price;
	  pricesArray.push(totalPriceItem);
	});
	let totalAmount = pricesArray.reduce((a, b) => a + b, 0);
	return totalAmount;
  }

  function updateProductQuantity(cart, index, type) {
	let products = [...cart.items]
	let product = products[index]
	if(type === 'add') {
	  product.quantity++
	} else if (type === 'subtract') {
	  product.quantity--
	}
	else if( type === 'remove') {
		product.quantity = 0
	}
	if (product.quantity <= 0) {
	  products.splice(index, 1);
	}
	return products
  }

  function cartQuantity(cart) {
	let quantity = [0];
	cart.forEach(product => {
	  quantity.push(product.quantity)
	});
	let totalQuantity = quantity.reduce((a, b) => a + b)
	return totalQuantity
  }

   export {
	calcTotalAmount,
	updateProductQuantity,
	cartQuantity
  }