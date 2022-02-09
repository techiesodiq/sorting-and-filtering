/** @format */

import SearchIcon from "@mui/icons-material/Search";
import {IconButton, InputBase, Paper, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";

const Search = ({onSearch}) => {
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down("md"));

	const desktopScreenSearch = (
		<Paper
			component="form"
			sx={{
				p: "2px 4px",
				display: "flex",
				alignItems: "center",
				width: "35%",
				maxWidth: "100%",
			}}
		>
			<InputBase
				sx={{ml: 1, flex: 1}}
				placeholder="Search "
				onChange={(e) => onSearch(e.target.value)}
				inputProps={{"aria-label": "search google maps"}}
			/>
			<IconButton type="submit" sx={{p: "10px"}} aria-label="search">
				<SearchIcon />
			</IconButton>
		</Paper>
	);

	const otherScreensSearch = (
		<Paper
			component="form"
			sx={{
				p: "2px 4px",
				display: "flex",
				alignItems: "center",
				width: "70%",
				maxWidth: "100%",
			}}
		>
			<InputBase
				sx={{ml: 1, flex: 1}}
				placeholder="Search "
				onChange={(e) => onSearch(e.target.value)}
				inputProps={{"aria-label": "search google maps"}}
			/>
			<IconButton type="submit" sx={{p: "10px"}} aria-label="search">
				<SearchIcon />
			</IconButton>
		</Paper>
	);

	return (
		<div style={{display: "grid", placeItems: "center"}}>
			{isMatch ? otherScreensSearch : desktopScreenSearch}
		</div>
	);
};

export default Search;
