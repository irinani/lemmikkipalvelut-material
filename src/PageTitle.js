import React from "react";
import { Container } from "@material-ui/core";
import "./Header.scss";

export default function PageTitle(props) {
  return (
    <div className="page-title" style={{ marginTop: "calc(64px + 2rem)" }}>
      <Container>
        <h1>{props.title}</h1>
        {props.description ? (
          <p style={{ color: "#403e3e", fontSize: "0.9rem" }}>
            {props.description}
          </p>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
}
