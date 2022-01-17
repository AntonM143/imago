


export const setLocalstorage = (items) => {
	localStorage.setItem('cart', JSON.stringify(items));
}

export const getLocalstorage = () => {
	const data = localStorage.getItem('cart');
	let storedData = data ? JSON.parse(data) : null
	return storedData;
}

export const clearLocalStorage = () => {
	localStorage.clear()
	console.log("localstorage cleared 😊😊");
}
