import React from "react";
import { NavLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import "./Header.scss";

export default function Header(props) {
	return (
		<AppBar className="Header" color="default">
			<Container maxWidth="md">
				<Box component="nav" display="flex" fontSize="body1.fontSize">
					<Link component={NavLink} exact to="/" className="logo-link">
						<b>Lemmikkipalvelut.fi</b>
					</Link>
					<Box
						component="ul"
						display="flex"
						ml="auto"
						my={0}
						p={0}
						alignItems="center"
						className="main-nav"
					>
						<Box component="li">
							<Link
								display="block"
								component={NavLink}
								activeClassName="current"
								exact
								to="/elainlaakarit"
							>
								Eläinlääkärit
							</Link>
						</Box>
						<Box component="li">
							<Link
								display="block"
								component={NavLink}
								activeClassName="current"
								exact
								to="/elaintarvikeliikkeet"
							>
								Eläintarvikeliikkeet
							</Link>
						</Box>
						{/* <Box component="li">
							<Link
								component={NavLink}
								activeClassName="current"
								exact
								to="/elaintarvikeliikkeet"
							>
								Eläintarvikeliikkeet
							</Link>
						</Box> */}
					</Box>
				</Box>
			</Container>
		</AppBar>
	);
}
