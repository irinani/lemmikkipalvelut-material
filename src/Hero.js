import React from "react";
import Container from "@material-ui/core/Container";
import "./Hero.scss";

export default function Hero(props) {
  const image = props.image;

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: props.backgroundPosition,
      }}
    >
      <div className="hero__overlay">
        <Container style={{ textAlign: "center" }} maxWidth={'sm'}>
          <h1>Lorem ipsum dolor sit</h1>
          <p>
            Nam molestie nec tortor. Donec placerat leo sit amet velit.
            Vestibulum id justo ut vitae massa. Proin in dolor mauris consequat
            aliquam. Donec ipsum, vestibulum ullamcorper venenatis augue.
          </p>
        </Container>
      </div>
    </div>
  );
}
