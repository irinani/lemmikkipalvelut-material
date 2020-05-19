import React from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function FilterPlaces(props) {
	let { setFilter } = props;

	return (
		<React.Fragment>
			<TextField
				style={{ marginBottom: "1rem" }}
				id="standard-basic"
				label="Etsi palvelua"
				fullWidth
				onChange={(e) => setFilter({ searchWord: e.target.value })}
			/>
			<FormControlLabel
				style={{ marginBottom: "0.5rem" }}
				control={
					<Checkbox
						onChange={(e) => setFilter({ onlyOpen: e.target.checked })}
						name="open-places"
						color="primary"
					/>
				}
				label="Näytä vain avoinna olevat"
			/>
		</React.Fragment>
	);
}
