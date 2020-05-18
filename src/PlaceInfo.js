import React from "react";
import {
  LocationOn as LocationOnIcon,
  Phone as PhoneIcon,
  Language as LanguageIcon,
  Email as EmailIcon,
} from "@material-ui/icons";
import "./App.scss";

export default function PlaceInfo(props) {
  const place = props.place;

  return (
    <React.Fragment>
      <div>
        {place.address && (
          <p style={{ lineHeight: "1.5", display: "flex" }}>
            <LocationOnIcon style={{ marginRight: "0.5rem" }} />
            <span>
              {place.address} <br />
              {place.postalCode} {place.city}
            </span>
          </p>
        )}
        {place.phone && (
          <p style={{ lineHeight: "1.5", display: "flex" }}>
            <PhoneIcon style={{ marginRight: "0.5rem" }} />
            <span>
              <a href={`tel:${place.phone.toString().replace(/[^0-9]/g, "")}`}>
                {place.phone}
              </a>
            </span>
          </p>
        )}
        {place.email && (
          <p style={{ lineHeight: "1.5", display: "flex" }}>
            <EmailIcon style={{ marginRight: "0.5rem" }} />
            <span>
              <a href={`mailto:${place.email}`}>{place.email}</a>
            </span>
          </p>
        )}
        {place.url && (
          <p style={{ lineHeight: "1.5", display: "flex" }}>
            <LanguageIcon style={{ marginRight: "0.5rem" }} />
            <span>
              <a href={place.url} rel="noopener noreferrer">
                {place.url}
              </a>
            </span>
          </p>
        )}
      </div>
      {place.openingHours && (
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
      )}
    </React.Fragment>
  );
}
