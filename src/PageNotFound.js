import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Title from "./Title";

export default function PageNotFound() {
	return (
		<React.Fragment>
			<Title heading="Page not found" />
			<Container maxWidth="md">
				<Button variant="contained" href="/" color="primary">
					Back to home page
				</Button>
			</Container>
		</React.Fragment>
	);
}
