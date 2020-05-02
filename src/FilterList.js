import React from "react";
import TextField from "@material-ui/core/TextField";
import "./FilterList.scss";

function filterValues() {
  const input = document.querySelector("#filterInput");
  const filter = input.value.toLowerCase();
  const filterItemsContainer = document.querySelector(".filterContent");
  const filterItems = filterItemsContainer.querySelectorAll(".filterItem");

  for (let i = 0; i < filterItems.length; i++) {
    const item = filterItems[i];
    const name = item.dataset.name;
    const address = item.dataset.address;
    if (
      name.toLowerCase().indexOf(filter) > -1 ||
      address.toLowerCase().indexOf(filter) > -1
    ) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  }
}

export default function FilterList(props) {
  const label = props.label;
  return (
    <form noValidate autoComplete="off" className="filterForm">
      <TextField
        id="filterInput"
        label={label}
        style={{ width: "100%" }}
        onChange={filterValues}
      />
    </form>
  );
}
