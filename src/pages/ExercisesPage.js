import React from "react";
import { Container } from "@material-ui/core";
import PageTitle from "../PageTitle";
import "../App.scss";

export default function ExercisesPage() {
  return (
    <React.Fragment>
      <PageTitle title="Ulkoilu ja liikunta" description="Lorem ipsum dolor" />
      <Container>
        <p>Subheading. Lorem ipsum dolor sit</p>
      </Container>
    </React.Fragment>
  );
}
