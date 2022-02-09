/** @format */

import {Link, Typography} from "@mui/material";
import React from "react";

const Footer = () => {
	return (
		<footer
			style={{
				backgroundColor: "#1976d2",
				color: "#fff",
				padding: "30px",
			}}
		>
			<Typography variant="body2" align="center">
				{"Copyright © "}
				<Link
					style={{textDecoration: "none"}}
					color="inherit"
					href="https://www.linkedin.com/in/sodiq-akanmu-13641987/"
				>
					Sodiq Akanmu{" "}
				</Link>
				{new Date().getFullYear()}
			</Typography>
		</footer>
	);
};

export default Footer;
