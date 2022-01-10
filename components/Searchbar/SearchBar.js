import React, { useState } from "react";
import styles from './SearchBar.module.css'
import { FaSearch, FaWindowClose } from "react-icons/fa";
import { useRouter } from 'next/router'

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const router = useRouter()

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

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

  const handleClick = (e) => {
	e.preventDefault()
	console.log(e, "e");
	let target = e.target
	router.push({
		pathname: `/${target.dataset.space}/${target.dataset.id}`,
	})
	clearInput()


}
  return (
	<div className={styles.search}>
		<div className={styles.searchInputs}>
			<input
				type="text"
				placeholder={placeholder}
				value={wordEntered}
				onChange={handleFilter}
				on
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
			{filteredData.slice(0, 15).map((value, key) => {
				return (
					<p
						onClick={handleClick}
						data-space={value.category}
						data-id={value.id}
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