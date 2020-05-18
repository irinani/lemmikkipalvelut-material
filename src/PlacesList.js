import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import isOpen from "./isOpen";
// import OpenToday from "./OpenToday";
import todaysOpeningHours from "./todaysOpeningHours";
import PlaceInfo from "./PlaceInfo";
import "./App.scss";

export default function PlacesList(props) {
  const places = props.placesArray;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <React.Fragment>
      <p>Eläinlääkäriasemia: {places.length}</p>
      {places.map((place, i) => {
        return (
          <ExpansionPanel
            key={i}
            expanded={expanded === `panel${i}`}
            onChange={handleChange(`panel${i}`)}
            style={{ boxShadow: "none" }}
            className="filterItem sortItem"
            data-open={place.openingHours && isOpen(place)}
            data-name={place.name}
            data-address={
              place.address &&
              `${place.address} ${place.postalCode} ${place.city}`
            }
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${i}bh-content`}
              id={`panel${i}bh-header`}
              style={{
                borderBottom: "1px solid #e9ecef",
              }}
            >
              <span style={{ fontWeight: "bold" }}>{place.name}</span>
              {place.openingHours && (
                <span>
                  {/* {isOpen(place) ? <OpenToday openingHours={place.openingHours} /> : "ei"} */}
                  {isOpen(place) ? (
                    <span style={{ color: "green" }}>
                      {todaysOpeningHours(place.openingHours)}
                    </span>
                  ) : (
                    <span style={{color:'red'}}>Suljettu tällä hetkellä</span>
                  )}
                </span>
              )}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
              style={{
                backgroundColor: "#f8f9fa",
                borderBottom: "1px solid #e9ecef",
              }}
            >
              <PlaceInfo place={place} />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}
    </React.Fragment>
  );
}
