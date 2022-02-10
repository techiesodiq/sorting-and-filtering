/** @format */
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	IconButton,
	Typography,
	useMediaQuery,
} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {useState} from "react";

const Products = (props) => {
	const {data, loading} = props;
	const [favorites, setFavorites] = useState({});
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

	const handleFavorite = (id) => () =>
		setFavorites((prev) => ({...prev, [id]: !prev[id] ? true : false}));

	const capitalizeFirstLetter = (str) =>
		str.substring(0, 1).toUpperCase() + str.substring(1);

	const desktopScreenProducts = loading ? (
		<div style={{display: "grid", placeItems: "center"}}>
			<h1>loading...</h1>
		</div>
	) : (
		<Box
			sx={{
				margin: "60px",
				padding: "40px",
				display: "grid",
				placeItems: "center",
			}}
		>
			<Grid container spacing={{xs: 4, md: 5}} columns={{xs: 4, sm: 8, md: 12}}>
				{data.map((item, index) => (
					<Grid item xs={12} sm={12} md={3} key={index}>
						<Card sx={{borderRadius: 4, height: "100%"}}>
							<CardMedia
								sx={{borderRadius: 4}}
								component="img"
								height="300"
								image={item.image}
								alt={item.title}
							/>

							<CardContent>
								<Typography
									variant="h6"
									component="h5"
									style={{
										height: "25px",
										fontWeight: "700px",
										marginBottom: "8px",
									}}
								>
									${item.price}
								</Typography>

								<Typography component="header" style={{height: "100px"}}>
									{item.title}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{capitalizeFirstLetter(item.category)}
								</Typography>
							</CardContent>
							<CardActions disableSpacing>
								<IconButton
									onClick={handleFavorite(item.id)}
									aria-label="add to favorites"
								>
									<FavoriteIcon
										sx={{color: favorites[item.id] ? "#ff5590" : "inherit"}}
									/>
								</IconButton>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);

	const otherScreensProducts = loading ? (
		<div style={{display: "grid", placeItems: "center"}}>
			<h1>Loading</h1>
		</div>
	) : (
		<Box
			sx={{
				margin: "30px",
				padding: "10px",
				display: "grid",
				placeItems: "center",
			}}
		>
			<Grid container spacing={{xs: 3, md: 5}} columns={{xs: 4, sm: 8, md: 12}}>
				{data.map((item, index) => (
					<Grid item xs={12} sm={12} md={4} key={index}>
						<Card sx={{maxWidth: 400, borderRadius: 4}}>
							<CardMedia
								sx={{borderRadius: 4}}
								component="img"
								height="250"
								image={item.image}
								alt={item.title}
							/>

							<CardContent>
								<Typography variant="h6" component="h5">
									${item.price}
								</Typography>

								<Typography component="header">{item.title}</Typography>
								<Typography variant="body2" color="text.secondary">
									{capitalizeFirstLetter(item.category)}
								</Typography>
							</CardContent>
							<CardActions disableSpacing>
								<IconButton
									onClick={handleFavorite(item.id)}
									aria-label="add to favorites"
								>
									<FavoriteIcon
										sx={{color: favorites[item.id] ? "#ff5590" : "inherit"}}
									/>
								</IconButton>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);

	return <>{isMatch ? otherScreensProducts : desktopScreenProducts}</>;
};

export default Products;
