/** @format */

import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import React, {useState} from "react";

const Sorting = (props) => {
	const {sortAsc, sortDesc, sortLowPrice, sortHighPrice, returnPureData} =
		props;
	const [sort, setSort] = useState("");

	const handleChange = (event) => {
		setSort(event.target.value);
		console.log(event.target.value);
		const value = event.target.value;
		switch (value) {
			case "asc":
				sortAsc();
				break;
			case "desc":
				sortDesc();
				break;
			case "lowToHigh":
				sortLowPrice();
				break;
			case "highToLow":
				sortHighPrice();
				break;
			default:
				returnPureData();
		}
	};

	const handleSubmit = () => {
		console.log("You clicked me");
	};

	return (
		<React.Fragment>
			<Box
				sx={{
					width: "70%",
					alignItems: "center",
					fontSize: "10px",
				}}
			>
				<form onSubmit={handleSubmit}>
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">Sort</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={sort}
							label="Sort"
							onChange={handleChange}
						>
							<MenuItem value={"asc"}>Product(Asc)</MenuItem>
							<MenuItem value={"desc"}>Product(Desc)</MenuItem>
							<MenuItem value={"lowToHigh"}>Price (Low to High)</MenuItem>
							<MenuItem value={"highToLow"}>Price (High to Low)</MenuItem>
						</Select>
					</FormControl>
				</form>
			</Box>
		</React.Fragment>
	);
};

export default Sorting;
