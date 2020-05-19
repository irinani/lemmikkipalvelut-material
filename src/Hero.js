import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function Hero(props) {
	return (
		<Box
			display="flex"
			height="100vh"
			pt="54px"
			style={{
				backgroundImage: `url(${props.img})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
		>
			<Box
				width="100%"
				height="100%"
				style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
				display="flex"
				alignItems="center"
			>
				<Box
					width={{ xs: "100%", md: "50%", lg: "40%" }}
					height={{ xs: "auto", md: "100%" }}
					bgcolor="rgba(0,0,0,0.8)"
					color="white"
					p={5}
					display="flex"
					justifyContent="center"
					flexDirection="column"
					ml="auto"
					mt={{ xs: "auto", md: 0 }}
				>
					<Typography variant="h2" component="h1" gutterBottom>
						{props.heading}
					</Typography>
					<Typography variant="body2">{props.description}</Typography>
				</Box>
			</Box>
		</Box>
	);
}
