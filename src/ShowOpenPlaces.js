import React from "react";

function toggleOpenPlaces(e) {
  const items = document.querySelectorAll(".sortItem");

  for (let i = 0; i < items.length; i++) {
    if (e.target.checked === true) {
      if (items[i].getAttribute("data-open") !== "true") {
        items[i].classList.add("hidden");
      }
    } else {
      items[i].classList.remove("hidden");
    }
  }
}

export default function ShowOpenPlaces() {
  return (
    <div style={{ width: "100%" }}>
      <p>Suodata:</p>
      <label style={{ marginRight: "1rem" }}>
        <input type="checkbox" name="showOpen" onChange={toggleOpenPlaces} />
        Näytä vain avoinna olevat
      </label>
      <label>
        <input type="checkbox" />
        Moi
      </label>
    </div>
  );
}
