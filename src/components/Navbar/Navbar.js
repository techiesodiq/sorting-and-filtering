/** @format */

import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
	return (
		<Box sx={{flexGrow: 1}}>
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						sx={{flexGrow: 1, fontWeight: "bold"}}
					>
						<Link style={{textDecoration: "none", color: "white"}} to="/">
							LOGO
						</Link>
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
