/** @format */
import {
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Paper,
	Typography,
} from "@mui/material";
import {Link} from "react-router-dom";
import "./product.css";

const Products = ({data}) => {
	return (
		<>
			<Box sx={{margin: "20px", overflowX: "hidden"}}>
				<>
					<Grid container rowSpacing={3} columnSpacing={{xs: 1, sm: 2, md: 5}}>
						<Grid item md={2}></Grid>
						<Grid item xs={12} md={6}>
							<Card sx={{borderRadius: 4}} variant="outlined">
								<CardMedia
									sx={{borderRadius: 4}}
									component="img"
									height="500"
									image={data.imgUrl}
									alt="Alt"
								/>
								<CardContent>
									<Typography variant="h6" component="h5">
										{data.title}
									</Typography>
									<Typography component="header">{data.price}</Typography>
									<Typography variant="body2" color="text.secondary">
										{data.details1}
									</Typography>
									<br />
									<Typography variant="body2" color="text.secondary">
										{data.details2}
									</Typography>
									<br />
									<Typography variant="body2" color="text.secondary">
										{data.details3}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} md={3}>
							<Paper elevation={0}>
								<div style={{margin: "0px", padding: "10px"}}>
									<h4>Features</h4>
									{data.features.map((feature) => (
										<ul>
											<li>{feature}</li>
										</ul>
									))}

									<p style={{margin: "0", padding: "4px"}}>
										<strong>Contact Name:</strong> {data.contactName}
									</p>
									<p style={{margin: "0", padding: "4px"}}>
										<strong>Contact Number:</strong> {data.contactNumber}
									</p>
									<p style={{margin: "0", padding: "4px"}}>
										<strong>Location:</strong> {data.location}
									</p>
									<p style={{margin: "0", padding: "4px"}}>
										<strong>Price:</strong> {data.price}
									</p>
									<p style={{margin: "0", padding: "4px"}}>
										<strong>Sale Type:</strong> {data.saleType}
									</p>
									<p style={{margin: "0", padding: "4px"}}>
										<strong>Property Type:</strong> {data.propertyType}
									</p>
									<p style={{margin: "0", padding: "4px"}}>
										<strong>Available Date:</strong> {data.availableDate}
									</p>
									<p style={{margin: "0", padding: "4px"}}>
										<strong>Bedrooms:</strong> {data.bedrooms}
									</p>
									<p style={{margin: "0", padding: "4px"}}>
										<strong>Living Rooms:</strong> {data.livingRoom}
									</p>
									<p style={{margin: "0", padding: "4px"}}>
										<strong>Number of Smoke Alarm:</strong>{" "}
										{data.numberOfSmokeAlarm}
									</p>
									<p style={{margin: "0", padding: "4px"}}>
										<strong>Number of CO Alarm:</strong> {data.numberOfCOAlarm}
									</p>
									<div style={{marginTop: "10px", paddingTop: "4px"}}>
										<Link to="/contact-seller" style={{textDecoration: "none"}}>
											<Button sx={{padding: "30"}} variant="contained">
												Contact Seller
											</Button>
										</Link>
									</div>
								</div>
							</Paper>
						</Grid>
						<Grid item md={1}></Grid>
					</Grid>
				</>
			</Box>
		</>
	);
};

export default Products;
