import React from "react";
import { Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import PageTitle from "../PageTitle";
// import stores from "../utils/stores";
import "../App.scss";
// import vets from "../utils/vets";
// import isOpen from "../isOpen";

// let vetsArray = vets;
// console.log(vetsArray);
// isOpen(vets);
// console.log(vets);
// console.log(array);

export default function StoresPage() {
  return (
    <React.Fragment>
      <PageTitle title="Eläintarvikeliikkeet" description=""/>
      <Container>
        <p>Stores page</p>
      </Container>
    </React.Fragment>
  );
}
