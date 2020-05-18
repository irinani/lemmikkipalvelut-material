import React from "react";
import { Container } from "@material-ui/core";
import FilterList from "../FilterList";
import SortList from "../SortList";
import PlacesList from "../PlacesList";
import PageTitle from "../PageTitle";
import ShowOpenPlaces from "../ShowOpenPlaces";
import isOpen from "../isOpen";
import vets from "../utils/vets";
import "../App.scss";

export default function VetsPage() {
  return (
    <React.Fragment>
      <PageTitle title="Eläinlääkärit" />
      <Container>
        <FilterList label="Etsi palvelua" />
        <ShowOpenPlaces />
        <SortList />
        {/* <div
          className="filterContent sortContent"
          style={{ marginTop: "2rem" }}
        >
          {vets.map((vet, i) => {
            return (
              <div key={i} data-open={vet.openingHours && isOpen(vet)}>
                <p style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>{vet.name}</span>
                  {vet.openingHours && <span>{isOpen(vet) ? 'on' : 'ei'}</span>}
                </p>
              </div>
            );
          })}
        </div> */}
        <PlacesList placesArray={vets} />
      </Container>
    </React.Fragment>
  );
}
