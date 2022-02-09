/** @format */

import axios from "axios";
import React, {useEffect, useState} from "react";
import Products from "../../components/Products";
import Search from "../../components/Search";

const Home = () => {
	const [productsData, setProductsData] = useState([]);
	const [searchData, setSearchData] = useState(productsData);

	const getProducts = async () => {
		try {
			const res = await axios.get("https://fakestoreapi.com/products");
			const resData = res.data;
			setProductsData(resData);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getProducts();
	}, []);

	console.log(productsData);

	const handleSearch = (val) => {
		const result = productsData.filter((item) => {
			return item.title.toLowerCase().includes(val.toLowerCase());
		});
		console.log(result);
		setSearchData(result);
	};

	return (
		<div style={{marginTop: "50px"}}>
			<Search onSearch={handleSearch} />
			<Products data={productsData} />
		</div>
	);
};

export default Home;
