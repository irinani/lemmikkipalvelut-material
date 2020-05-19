import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import Place from "./Place/Place";
import FilterPlaces from "./Place/FilterPlaces";
import PlacesPagination from "./Place/PlacesPagination";

import vetsArray from "./utils/vets";
import isOpen from "./helpers/isOpen";

const vetsChecked = vetsArray.map((e, i) => {
	return { ...e, isOpenToday: isOpen(e.openingHours) };
});

export default function VetsPage(props) {
	let [page, setPage] = React.useState(1);
	let [places, setPlaces] = React.useState(vetsChecked);
	let [filterParams, setFilterParams] = React.useState({
		searchWord: "",
		onlyOpen: false,
	});

	const rowsPerPage = 5;

	const paginationChanges = (event, page) => {
		setPage(page);
	};

	function filterPlaces(parameters) {
		let params = { ...filterParams, ...parameters };
		console.log(params);
		setFilterParams(params);

		let vets = vetsChecked;

		if (params.onlyOpen) {
			vets = vets.filter((vet) => vet.isOpenToday);
		}

		if (params.searchWord.length > 0) {
			const searchWord = params.searchWord.toUpperCase();

			vets = vets.filter(function (e) {
				return (
					e.name.toUpperCase().includes(searchWord) ||
					e.city.toUpperCase().includes(searchWord)
				);
			});
		}
		setPlaces(vets);
		setPage(1);
	}

	return (
		<React.Fragment>
			<Title heading="Eläinlääkärit" />
			<Container maxWidth="md">
				<Grid container spacing={3}>
					<Grid item container xs={12}>
						<Grid item xs={12} md={8}>
							<FilterPlaces setFilter={filterPlaces} />
						</Grid>
						<Grid
							item
							xs={12}
							md={4}
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-end",
								justifyContent: "flex-end",
							}}
						>
							{places.length == 0 ? (
								""
							) : (
								<Box ml="auto" mb="1rem">
									<PlacesPagination
										places={places}
										page={page}
										rowsPerPage={rowsPerPage}
										onChange={paginationChanges}
									/>
								</Box>
							)}
							<Typography>
								<b>
									{places.length === 0
										? "Ei hakutuloksia"
										: `Palveluja löytyi ${places.length} kpl`}
								</b>
							</Typography>
						</Grid>
					</Grid>

					{places
						.slice(
							(page - 1) * rowsPerPage,
							(page - 1) * rowsPerPage + rowsPerPage
						)
						.map((el, i) => {
							return (
								<Place
									key={i}
									name={el.name}
									address={el.address}
									postalCode={el.postalCode}
									city={el.city}
									phone={el.phone}
									email={el.email}
									url={el.url}
									openingHours={el.openingHours}
								/>
							);
						})}
				</Grid>
			</Container>
		</React.Fragment>
	);
}
