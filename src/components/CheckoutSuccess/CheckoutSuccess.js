/** @format */

import {Box, Paper, Typography} from "@mui/material";
import React from "react";
import data from "../../data/checkoutMessage.json";

const CheckoutSuccess = () => {
	return (
		<>
			<Box sx={{display: "grid", placeItems: "center"}}>
				<div
					style={{
						height: "90vh",
						width: "90vw", //adjust the height (maybe 100vh)
						position: "relative",
					}}
				>
					<Paper
						elevation={3}
						style={{
							margin: 0,
							paddingBottom: "10px",
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
						}}
					>
						<div
							style={{
								margin: "10px",
								padding: "0px",
								textAlign: "center",
							}}
						>
							<h3 style={{lineHeight: "0"}}>Checkout!</h3>
							<br />
							<div>
								<Typography>{data.message} </Typography>
							</div>
						</div>
					</Paper>
				</div>
			</Box>
		</>
	);
};

export default CheckoutSuccess;
