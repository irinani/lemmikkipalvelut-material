import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Collapse from "@material-ui/core/Collapse";

import isOpen from "../helpers/isOpen";
import todaysOpeningHours from "../helpers/todaysOpeningHours";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import IconButton from "@material-ui/core/IconButton";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LanguageIcon from "@material-ui/icons/Language";

import "../App.scss";

export default function Place(props) {
	const {
		name,
		address,
		phone,
		email,
		url,
		postalCode,
		city,
		openingHours,
	} = props;
	const [open, setOpen] = React.useState(false);
	const locationUrl = `https://www.google.fi/maps/place/${address
		.split(" ")
		.join("+")},+${postalCode}+${city}/`;

	const headingBorderRadius = open
		? { borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }
		: { borderRadius: "0.5rem" };

	return (
		<Grid
			item
			xs={12}
			className="sortItem"
			data-open={openingHours && isOpen(openingHours)}
			data-name={name}
		>
			<Box
				bgcolor="grey.300"
				pl={3}
				pr={1}
				py={1}
				style={headingBorderRadius}
				onClick={() => setOpen(!open)}
			>
				<Grid container alignItems="center">
					<Grid item xs={12} md={8}>
						<Typography variant="h4" component="h2">
							{name}
						</Typography>
					</Grid>

					<Grid item xs={12} md={4}>
						<Box display="flex" alignItems="center">
							{openingHours && (
								<React.Fragment>
									<Box
										bgcolor={
											isOpen(openingHours) ? "success.dark" : "error.dark"
										}
										width="100%"
										borderRadius="0.25rem"
										color="white"
										textAlign="center"
										p={1}
										mr={2}
										fontSize="body1.fontSize"
										fontWeight="600"
									>
										{isOpen(openingHours)
											? todaysOpeningHours(openingHours)
											: "Suljettu tällä hetkellä"}
									</Box>
								</React.Fragment>
							)}
							<IconButton
								color="inherit"
								style={{ marginLeft: "auto" }}
								aria-label="Lisätietoja"
								aria-expanded={open ? "true" : "false"}
							>
								{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
							</IconButton>
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<Box
					p={3}
					bgcolor="grey.200"
					style={{
						borderBottomLeftRadius: "0.5rem",
						borderBottomRightRadius: "0.5rem",
					}}
				>
					<Grid container>
						<Grid item xs={12} md={8}>
							<Typography gutterBottom>
								<b>Yhteystiedot</b>
							</Typography>
							{address && postalCode && city && (
								<Box display="flex" alignItems="center" mb={2}>
									<LocationOnIcon style={{ marginRight: "0.75rem" }} />
									<Typography>
										{address && postalCode && city ? (
											<Link href={locationUrl}>
												{address}, {postalCode} {city}
											</Link>
										) : (
											<span>
												{address}, {postalCode} {city}
											</span>
										)}
									</Typography>
								</Box>
							)}
							{url && (
								<Box display="flex" alignItems="center" mb={2}>
									<LanguageIcon style={{ marginRight: "0.5rem" }} />
									<Typography>
										<Link href={url}>{url}</Link>
									</Typography>
								</Box>
							)}
							{phone && (
								<Box display="flex" alignItems="center" mb={2}>
									<PhoneIcon style={{ marginRight: "0.5rem" }} />
									<Typography>
										<Link
											href={`tel:${phone.toString().replace(/[^0-9]/g, "")}`}
										>
											{phone}
										</Link>
									</Typography>
								</Box>
							)}
							{email && (
								<Box display="flex" alignItems="center">
									<EmailIcon style={{ marginRight: "0.5rem" }} />
									<Typography>
										<Link href={`mailto:${email}`}>{email}</Link>
									</Typography>
								</Box>
							)}
						</Grid>
						{openingHours && (
							<Grid item xs={12} md={4}>
								<Typography gutterBottom>
									<b>Aukioloajat</b>
								</Typography>
								<Box component="table">
									<Box component="tbody">
										{openingHours.map((el, i) => {
											return (
												<Box component="tr" key={i}>
													<Box component="th" textAlign="left" pr={2}>
														<Typography>{el.weekday}</Typography>
													</Box>
													<Box component="td">
														<Typography>{el.hours}</Typography>
													</Box>
												</Box>
											);
										})}
									</Box>
								</Box>
							</Grid>
						)}
					</Grid>
				</Box>
			</Collapse>
			{/* </Box> */}
		</Grid>
	);
}
