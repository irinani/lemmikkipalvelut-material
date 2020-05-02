import React from "react";

export function checkIfOpen(hours) {
  const curDate = new Date();

  const startTime = `${hours.split("-")[0]}:00`;
  const endTime = `${hours.split("-").pop()}:00`;

  const s = startTime.split(":");
  const startTimeSplitted = new Date(
    curDate.getFullYear(),
    curDate.getMonth(),
    curDate.getDate(),
    parseInt(s[0]),
    parseInt(s[1]),
    parseInt(s[2])
  );

  const e = endTime.split(":");
  const endTimeSplitted = new Date(
    curDate.getFullYear(),
    curDate.getMonth(),
    curDate.getDate(),
    parseInt(e[0]),
    parseInt(e[1]),
    parseInt(e[2])
  );

  return curDate >= startTimeSplitted && curDate <= endTimeSplitted
    ? true
    : false;
}

export default function OpenToday(props) {
  const openingHours = props.openingHours;
  const weekdays = [
    "Sunnuntai",
    "Maanantai",
    "Tiistai",
    "Keskiviikko",
    "Torstai",
    "Perjantai",
    "Lauantai",
  ];
  const curDay = weekdays[new Date().getDay()];
  const todaysHours = openingHours.map((item, key) => {
    if (item.weekday === curDay) {
      return checkIfOpen(item.hours) ? (
        <span style={{ color: "green" }}>Avoinna tänään: {item.hours}</span>
      ) : (
        // true
        <span style={{ color: "red" }}>Suljettu tältä päivältä</span>
        // false
      );
    }
  });
  return <React.Fragment>{todaysHours}</React.Fragment>;
}
