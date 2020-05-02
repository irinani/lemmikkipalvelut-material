import React from "react";
import { Container } from "@material-ui/core";
import PageTitle from "../PageTitle";
import "../App.scss";

export default function WellbeingPage() {
  return (
    <React.Fragment>
      <PageTitle title="Hyvinvointi" description="Lorem ipsum dolor" />
      <Container>
        <p>Subheading. Lorem ipsum dolor sit</p>
      </Container>
    </React.Fragment>
  );
}
