import React from "react";
import Hero from "../Hero";
import "../App.scss";

import heroImg from "../img/hero-yaba.jpg";

export default function HomePage() {
  return (
    <React.Fragment>
      <Hero image={heroImg} backgroundPosition="top" />
    </React.Fragment>
  );
}
