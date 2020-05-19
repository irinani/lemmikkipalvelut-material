import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

export default function Title(props) {
	return (
		<Box mt="54px" mb={3} bgcolor="grey.200" py={3}>
			<Container maxWidth="md">
				<Typography variant="h2" component="h1">
					{props.heading}
				</Typography>
			</Container>
		</Box>
	);
}
