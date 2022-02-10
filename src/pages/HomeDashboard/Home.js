/** @format */

import {Box, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import axios from "axios";
import React, {useEffect, useState} from "react";
import Products from "../../components/Products";
import Search from "../../components/Search";
import Sorting from "../../components/Sorting";
import {
	ascSortData,
	descSortData,
	highToLowPriceSortData,
	lowToHighPriceSortData,
} from "../../utility/helper";

const Home = () => {
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down("md"));

	const [productsData, setProductsData] = useState([]);
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	const sortProductsInAscOrder = () => setData(ascSortData);
	const sortProductsInDescOrder = () => setData(descSortData);
	const sortPriceFromLowToHigh = () => setData(lowToHighPriceSortData);
	const sortPriceFromHighToLow = () => setData(highToLowPriceSortData);
	const returnPureData = () => setData(productsData);

	const getProducts = async () => {
		setLoading(true);
		try {
			const res = await axios.get("https://fakestoreapi.com/products");
			const resData = res.data;
			setProductsData(resData);
			setData(resData);
			setLoading(false);
		} catch (err) {
			console.error(err);
			setLoading(false);
		}
	};

	useEffect(() => {
		getProducts();
	}, []);

	useEffect(() => {
		console.log(data);
	}, [data]);

	console.log(productsData);

	const handleSearch = (val) => {
		const result = productsData.filter((item) => {
			return Object.values(item)
				.join(" ")
				.toLowerCase()
				.includes(val.toLowerCase());
		});
		console.log(result);
		setData(result);
	};

	const desktopScreenSortAndSearch = (
		<Box sx={{flexGrow: 1}}>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-around",
				}}
			>
				<div style={{width: "25%"}}>
					<Sorting
						sortAsc={sortProductsInAscOrder}
						sortDesc={sortProductsInDescOrder}
						sortLowPrice={sortPriceFromLowToHigh}
						sortHighPrice={sortPriceFromHighToLow}
						returnPureData={returnPureData}
					/>
				</div>
				<div style={{width: "25%"}}>
					<Search onSearch={handleSearch} />
				</div>
			</div>
		</Box>
	);

	const otherScreensSortAndSearch = (
		<Box sx={{flexGrow: 1}}>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-around",
				}}
			>
				<div style={{width: "38%"}}>
					<Sorting
						sortAsc={sortProductsInAscOrder}
						sortDesc={sortProductsInDescOrder}
						sortLowPrice={sortPriceFromLowToHigh}
						sortHighPrice={sortPriceFromHighToLow}
						returnPureData={returnPureData}
					/>
				</div>
				<div style={{width: "40%"}}>
					<Search onSearch={handleSearch} />
				</div>
			</div>
		</Box>
	);

	return (
		<div style={{marginTop: "50px"}}>
			{isMatch ? otherScreensSortAndSearch : desktopScreenSortAndSearch}
			<Products data={data} loading={loading} />
		</div>
	);
};

export default Home;
