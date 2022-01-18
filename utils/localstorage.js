
export const setLocalstorage = (items, key) => {
	localStorage.setItem(key, JSON.stringify(items));
}

export const getLocalstorage = (key) => {
	const data = localStorage.getItem(key);
	let storedData = data ? JSON.parse(data) : null
	return storedData;
}

export const clearLocalStorage = () => {
	localStorage.clear()
}
