import React from "react";
import Hero from "../Hero";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LinkBox from "../LinkBox";
import "../App.scss";

import heroImg from "../img/hero-yaba.jpg";

export default function HomePage() {
  return (
    <React.Fragment>
      <Hero image={heroImg} backgroundPosition="top" />
      <Container maxWidth={"lg"}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <LinkBox url="/elainlaakarit" heading="Eläinlääkärit" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LinkBox
              url="/elaintarvikeliikkeet"
              heading="Eläintarvikelikkeet"
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
