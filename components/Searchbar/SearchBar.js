import React, { useEffect, useState } from "react";
import styles from './SearchBar.module.scss'
import { FaSearch, FaWindowClose } from "react-icons/fa";
import { useRouter } from 'next/router'

function SearchBar({ placeholder }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [data, setData] = useState(null)
  const router = useRouter()

  useEffect(() => {
		async function get() {
			const response = await fetch('http://localhost:3000/api/allProducts')
			const data = await response.json()
			setData(data)
		}
		get()
	}, [])

  const handleFilter = (event) => {

	  console.log(event.target.value);
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = data ? data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    }) : "";

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const handleClick = (id) => {
	  console.log(id);
	router.push({
		pathname: `/product/${id}`,
	})
	clearInput()


	}

  return (
	<div className={styles.search}>
		<div >
			<input
				type="text"
				placeholder={placeholder}
				className={styles.searchInputs}
				value={wordEntered}
				onChange={handleFilter}
			/>
		</div>
		<div className={styles.searchIcon}>
			{filteredData.length === 0 ? (
				<FaSearch />
			) : (
				<FaWindowClose id="clearBtn" onClick={clearInput} />
			)}
		</div>
		{filteredData.length != 0 && (
			<div className={styles.searchResult}>
			{filteredData.slice(0, 5).map((value, key) => {
				return (
					<p
						className={styles.result}
						onClick={() => handleClick(value._id)}
						key={key}
					>
						{value.title}
					</p>
				);
			})}
			</div>
		)}
    </div>
  );
}

export default SearchBar;