import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import OpenToday from "./OpenToday";
import {
  ExpandMore as ExpandMoreIcon,
  LocationOn as LocationOnIcon,
  Phone as PhoneIcon,
  Language as LanguageIcon,
} from "@material-ui/icons";
import isOpen from './isOpen';
import "./App.scss";

export default function PlacesList(props) {
  const places = props.placesArray;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <React.Fragment>
      {places.map((place, i) => {
        return (
          <ExpansionPanel
            key={i}
            expanded={expanded === `panel${i}`}
            onChange={handleChange(`panel${i}`)}
            style={{ boxShadow: "none" }}
            className="filterItem sortItem"
            data-open={isOpen(place)}
            data-name={place.name}
            data-address={`${place.address} ${place.postalCode} ${place.city}`}
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
              <OpenToday openingHours={place.openingHours} />
              {/* {OpenToday(place.openingHours) ? 'auki' : 'kiinni'} */}
              {/* {OpenToday(place.openingHours)} */}
              {/* {isOpen(place.openingHours)} */}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
              style={{
                backgroundColor: "#f8f9fa",
                borderBottom: "1px solid #e9ecef",
              }}
            >
              <div>
                <p style={{ lineHeight: "1.5", display: "flex" }}>
                  <LocationOnIcon style={{ marginRight: "0.5rem" }} />
                  <span>
                    {place.address} <br />
                    {place.postalCode} {place.city}
                  </span>
                </p>
                <p style={{ lineHeight: "1.5", display: "flex" }}>
                  <PhoneIcon style={{ marginRight: "0.5rem" }} />
                  <span>
                    <a
                      href={`tel:${place.phone
                        .toString()
                        .replace(/[^0-9]/g, "")}`}
                    >
                      {place.phone}
                    </a>
                  </span>
                </p>
                <p style={{ lineHeight: "1.5", display: "flex" }}>
                  <LanguageIcon style={{ marginRight: "0.5rem" }} />
                  <span>
                    <a href={place.url} rel="noopener noreferrer">
                      {place.url}
                    </a>
                  </span>
                </p>
              </div>
              <div>
                <table className="opening-hours">
                  <tbody>
                    {place.openingHours.map((day, i) => {
                      return (
                        <tr key={i}>
                          <th>{day.weekday}</th>
                          <td>{day.hours}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}
    </React.Fragment>
  );
}
