/** @format */

import {
	Box,
	Button,
	Grid,
	Paper,
	TextField,
	useMediaQuery,
} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {Formik} from "formik";
import React, {useState} from "react";
import * as Yup from "yup";

const Form = () => {
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
	const [loading, setLoading] = useState(false);

	const formikInitialValues = {
		firstName: "",
		lastName: "",
		email: "",
		number: "",
		address1: "",
		address2: "",
		city: "",
		state: "",
		message: "",
	};

	const formikValidationSchema = Yup.object({
		firstName: Yup.string()
			.min(2, "Must be 2 characters or more")
			.required("Required"),
		lastName: Yup.string().min(2, "Must be 2 characters").required("Required"),
		email: Yup.string().email("Not a valid email address").required("Required"),
		number: Yup.string()
			.min(10, "Must be 10 characters or more")
			.max(16, "Must be 16 characters or less")
			.matches(/(^[0-9]+$)/, "Number can only contain digit number")
			.required("Required"),
		address1: Yup.string().required("Required"),
		address2: Yup.string(),
		city: Yup.string().required("Required"),
		state: Yup.string().required("Required"),
		message: Yup.string()
			.max(500, "Must be 500 characters or less")
			.required("Required"),
	});

	const formikHandleSubmit = async (values, {resetForm}) => {
		console.log(values);
		setLoading(true);
		if (values) {
			console.log(values);
			window.location.href = "/checkout-success";
		}
		resetForm({values: ""});
	};

	const desktopScreenForm = (
		<div
			style={{
				height: "87vh",
				width: "73vw", //adjust the height (maybe 100vh)
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
					}}
				>
					<h3 style={{lineHeight: "0"}}>Checkout Form</h3>
					<p style={{fontSize: "11px", lineHeight: "0"}}>
						<i>Kindly fill the form below to complete your transaction</i>
					</p>
					<Formik
						initialValues={formikInitialValues}
						validationSchema={formikValidationSchema}
						onSubmit={formikHandleSubmit}
					>
						{(props) => {
							console.log(props.errors);
							return (
								<form onSubmit={props.handleSubmit} style={{marginTop: "50px"}}>
									<Grid
										container
										rowSpacing={3}
										columnSpacing={{xs: 1, sm: 2, md: 3}}
									>
										<Grid item xs={6}>
											<TextField
												id="outlined-basic"
												label="First Name*"
												variant="outlined"
												name="firstName"
												onBlur={props.handleBlur}
												onChange={props.handleChange}
												value={props.values.firstName}
											/>
											{props.touched.firstName && props.errors.firstName ? (
												<p
													style={{color: "red", fontSize: "11px", marginTop: 0}}
												>
													{props.errors.firstName}
												</p>
											) : null}
										</Grid>
										<Grid item xs={6}>
											<TextField
												id="outlined-basic"
												label="Last Name*"
												variant="outlined"
												name="lastName"
												onBlur={props.handleBlur}
												onChange={props.handleChange}
												value={props.values.lastName}
											/>
											{props.touched.lastName && props.errors.lastName ? (
												<p
													style={{color: "red", fontSize: "11px", marginTop: 0}}
												>
													{props.errors.lastName}
												</p>
											) : null}
										</Grid>
										<Grid item xs={6}>
											<TextField
												id="outlined-basic"
												label="Email*"
												variant="outlined"
												name="email"
												onBlur={props.handleBlur}
												onChange={props.handleChange}
												value={props.values.email}
											/>
											{props.touched.email && props.errors.email ? (
												<p
													style={{color: "red", fontSize: "11px", marginTop: 0}}
												>
													{props.errors.email}
												</p>
											) : null}
										</Grid>
										<Grid item xs={6}>
											<TextField
												id="outlined-basic"
												label="Number*"
												variant="outlined"
												name="number"
												onBlur={props.handleBlur}
												onChange={props.handleChange}
												value={props.values.number}
											/>
											{props.touched.number && props.errors.number ? (
												<p
													style={{color: "red", fontSize: "11px", marginTop: 0}}
												>
													{props.errors.number}
												</p>
											) : null}
										</Grid>
										<Grid item xs={6}>
											<TextField
												id="outlined-basic"
												label="Address Line 1*"
												variant="outlined"
												name="address1"
												onBlur={props.handleBlur}
												onChange={props.handleChange}
												value={props.values.address1}
											/>
											{props.touched.address1 && props.errors.address1 ? (
												<p
													style={{color: "red", fontSize: "11px", marginTop: 0}}
												>
													{props.errors.address1}
												</p>
											) : null}
										</Grid>
										<Grid item xs={6}>
											<TextField
												id="outlined-basic"
												label="Address Line 2"
												variant="outlined"
												name="address2"
												onBlur={props.handleBlur}
												onChange={props.handleChange}
												value={props.values.address2}
											/>
											{props.touched.address2 && props.errors.address2 ? (
												<p
													style={{color: "red", fontSize: "11px", marginTop: 0}}
												>
													{props.errors.address2}
												</p>
											) : null}
										</Grid>

										<Grid item xs={6}>
											<TextField
												id="outlined-basic"
												label="City*"
												variant="outlined"
												name="city"
												onBlur={props.handleBlur}
												onChange={props.handleChange}
												value={props.values.city}
											/>
											{props.touched.city && props.errors.city ? (
												<p
													style={{color: "red", fontSize: "11px", marginTop: 0}}
												>
													{props.errors.city}
												</p>
											) : null}
										</Grid>
										<Grid item xs={6}>
											<TextField
												id="outlined-basic"
												label="State*"
												variant="outlined"
												name="state"
												onBlur={props.handleBlur}
												onChange={props.handleChange}
												value={props.values.state}
											/>
											{props.touched.state && props.errors.state ? (
												<p
													style={{color: "red", fontSize: "11px", marginTop: 0}}
												>
													{props.errors.state}
												</p>
											) : null}
										</Grid>
										<Grid item xs={12}>
											<TextField
												id="outlined-basic"
												label="Message*"
												variant="outlined"
												multiline
												rows={3}
												style={{width: "95%"}}
												name="message"
												onBlur={props.handleBlur}
												onChange={props.handleChange}
												value={props.values.message}
											/>
											{props.touched.message && props.errors.message ? (
												<p
													style={{color: "red", fontSize: "11px", marginTop: 0}}
												>
													{props.errors.message}
												</p>
											) : null}
										</Grid>

										<Grid
											item
											xs={12}
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												marginTop: "20px",
											}}
										>
											<Button type="submit" variant="contained">
												{loading ? "Placing Order" : "Place Order"}
											</Button>
										</Grid>
									</Grid>
								</form>
							);
						}}
					</Formik>
				</div>
			</Paper>
		</div>
	);

	const otherScreensForm = (
		<Paper
			elevation={3}
			style={{
				margin: "5px",
				padding: "5px",
			}}
		>
			<div
				style={{
					margin: "10px",
					padding: "10px",
				}}
			>
				<h3 style={{lineHeight: "0"}}>Checkout Form</h3>
				<p style={{fontSize: "11px", lineHeight: "0"}}>
					<i>Kindly fill the form below to complete your transaction</i>
				</p>
				<Formik
					initialValues={formikInitialValues}
					validationSchema={formikValidationSchema}
					onSubmit={formikHandleSubmit}
				>
					{(props) => {
						return (
							<form onSubmit={props.handleSubmit} style={{marginTop: "30px"}}>
								<Grid
									container
									rowSpacing={2}
									columnSpacing={{xs: 1, sm: 2, md: 3}}
								>
									<Grid item xs={6}>
										<TextField
											id="outlined-basic"
											label="First Name*"
											variant="outlined"
											name="firstName"
											onBlur={props.handleBlur}
											onChange={props.handleChange}
											value={props.values.firstName}
										/>
										{props.touched.firstName && props.errors.firstName ? (
											<p style={{color: "red", fontSize: "11px", marginTop: 0}}>
												{props.errors.firstName}
											</p>
										) : null}
									</Grid>
									<Grid item xs={6}>
										<TextField
											id="outlined-basic"
											label="Last Name*"
											variant="outlined"
											name="lastName"
											onBlur={props.handleBlur}
											onChange={props.handleChange}
											value={props.values.lastName}
										/>
										{props.touched.lastName && props.errors.lastName ? (
											<p style={{color: "red", fontSize: "11px", marginTop: 0}}>
												{props.errors.lastName}
											</p>
										) : null}
									</Grid>
									<Grid item xs={6}>
										<TextField
											id="outlined-basic"
											label="Email*"
											variant="outlined"
											name="email"
											onBlur={props.handleBlur}
											onChange={props.handleChange}
											value={props.values.email}
										/>
										{props.touched.email && props.errors.email ? (
											<p style={{color: "red", fontSize: "11px", marginTop: 0}}>
												{props.errors.email}
											</p>
										) : null}
									</Grid>
									<Grid item xs={6}>
										<TextField
											id="outlined-basic"
											label="Number*"
											variant="outlined"
											name="number"
											onBlur={props.handleBlur}
											onChange={props.handleChange}
											value={props.values.number}
										/>
										{props.touched.number && props.errors.number ? (
											<p style={{color: "red", fontSize: "11px", marginTop: 0}}>
												{props.errors.number}
											</p>
										) : null}
									</Grid>
									<Grid item xs={6}>
										<TextField
											id="outlined-basic"
											label="Address Line 1*"
											variant="outlined"
											name="address1"
											onBlur={props.handleBlur}
											onChange={props.handleChange}
											value={props.values.address1}
										/>
										{props.touched.address1 && props.errors.address1 ? (
											<p style={{color: "red", fontSize: "11px", marginTop: 0}}>
												{props.errors.address1}
											</p>
										) : null}
									</Grid>
									<Grid item xs={6}>
										<TextField
											id="outlined-basic"
											label="Address Line 2"
											variant="outlined"
											name="address2"
											onBlur={props.handleBlur}
											onChange={props.handleChange}
											value={props.values.address2}
										/>
										{props.touched.address2 && props.errors.address2 ? (
											<p style={{color: "red", fontSize: "11px", marginTop: 0}}>
												{props.errors.address2}
											</p>
										) : null}
									</Grid>

									<Grid item xs={6}>
										<TextField
											id="outlined-basic"
											label="City*"
											variant="outlined"
											name="city"
											onBlur={props.handleBlur}
											onChange={props.handleChange}
											value={props.values.city}
										/>
										{props.touched.city && props.errors.city ? (
											<p style={{color: "red", fontSize: "11px", marginTop: 0}}>
												{props.errors.city}
											</p>
										) : null}
									</Grid>
									<Grid item xs={6}>
										<TextField
											id="outlined-basic"
											label="State*"
											variant="outlined"
											name="state"
											onBlur={props.handleBlur}
											onChange={props.handleChange}
											value={props.values.state}
										/>
										{props.touched.state && props.errors.state ? (
											<p style={{color: "red", fontSize: "11px", marginTop: 0}}>
												{props.errors.state}
											</p>
										) : null}
									</Grid>
									<Grid item xs={12}>
										<TextField
											id="outlined-basic"
											label="Message*"
											variant="outlined"
											multiline
											rows={3}
											fullWidth
											name="message"
											onBlur={props.handleBlur}
											onChange={props.handleChange}
											value={props.values.message}
										/>
										{props.touched.message && props.errors.message ? (
											<p style={{color: "red", fontSize: "11px", marginTop: 0}}>
												{props.errors.message}
											</p>
										) : null}
									</Grid>

									<Grid
										item
										xs={12}
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											marginTop: "20px",
										}}
									>
										<Button type="submit" variant="contained">
											{loading ? "Placing Order" : "Place Order"}
										</Button>
									</Grid>
								</Grid>
							</form>
						);
					}}
				</Formik>
			</div>
		</Paper>
	);

	return (
		<>
			<Box
				sx={{
					display: "grid",
					placeItems: "center",
				}}
			>
				{isMatch ? otherScreensForm : desktopScreenForm}
			</Box>
		</>
	);
};

export default Form;
