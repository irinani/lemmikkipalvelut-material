import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";

export default function PlacesPagination(props) {
	let { rowsPerPage, places, onChange } = props;
	return (
		<Pagination
			count={Math.ceil(places.length / rowsPerPage)}
			color="primary"
			onChange={(event, page) => onChange(event, page)}
			siblingCount={0}
			renderItem={(item) => (
				<PaginationItem
					{...item}
					style={{ fontSize: "0.9rem", fontWeight: 600 }}
				/>
			)}
		/>
	);
}
