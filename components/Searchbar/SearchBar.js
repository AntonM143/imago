import React, { useEffect, useState } from "react";
import styles from './SearchBar.module.scss'
import { FaSearch, FaWindowClose } from "react-icons/fa";
import { useRouter } from 'next/router'
import { url_path } from 'config';
import Image from "next/image";

function SearchBar({ placeholder }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [data, setData] = useState(null)
  const router = useRouter()

  useEffect(() => {
		async function get() {
			const response = await fetch(`${url_path}/api/posters/all-products`)
			const data = await response.json()
			setData(data)
		}
		get()
	}, [])

  const handleFilter = (event) => {

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
					<div
						className={styles.result}
						onClick={() => handleClick(value._id)}
						key={key}
					>
						<div className={styles.image}>
							<Image
								src={value.images[0]}
								alt={value.title}
								width={75}
								height={75}
								// layout="fill"
								objectFit="cover"
							/>
						</div>
						<div className={styles.title}>
							{value.title}
						</div>
					</div>
				);
			})}
			</div>
		)}
    </div>
  );
}

export default SearchBar;