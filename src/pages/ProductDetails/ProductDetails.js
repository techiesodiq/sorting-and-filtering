/** @format */

import React from "react";
import {useParams} from "react-router-dom";
import GoogleMap from "../../components/GoogleMap";
import Product from "../../components/Product";
import data from "../../data/productDetails.json";

const ProductDetails = () => {
	const {productLink} = useParams();
	return (
		<>
			{data
				.filter((item) => item.productLink === productLink)
				.map((item, index) => (
					<div key={index}>
						<Product data={item} />
						<GoogleMap data={item} />
					</div>
				))}
		</>
	);
};

export default ProductDetails;
