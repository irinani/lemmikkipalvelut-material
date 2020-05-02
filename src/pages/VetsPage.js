import React from "react";
import { Container } from "@material-ui/core";
import FilterList from "../FilterList";
import SortList from "../SortList";
import PlacesList from "../PlacesList";
import PageTitle from "../PageTitle";
import ShowOpenPlaces from '../ShowOpenPlaces';
import vets from "../utils/vets";
import "../App.scss";

export default function VetsPage() {
  return (
    <React.Fragment>
      <PageTitle title="Eläinlääkärit" />
      <Container>
        <FilterList label="Etsi palvelua" />
        <ShowOpenPlaces />
        {/* <div style={{ width: "100%" }}>
          <p>Suodata:</p>
          <label style={{ marginRight: "1rem" }}>
            <input type="checkbox" />
            Näytä vain avoinna olevat
          </label>
          <label>
            <input type="checkbox" />
            Moi
          </label>
        </div> */}
        <SortList />
        <div className="filterContent sortContent">
          <PlacesList placesArray={vets} />
        </div>
      </Container>
    </React.Fragment>
  );
}
