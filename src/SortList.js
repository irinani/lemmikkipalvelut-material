import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function sortAlphabetically() {
  var list, i, switching, b, shouldSwitch;
  list = document.querySelector(".sortContent");
  switching = true;
  /* Make a loop that will continue until
      no switching has been done: */
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.querySelectorAll(".sortItem");
    // Loop through all list-items:
    for (i = 0; i < b.length - 1; i++) {
      // start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should
          switch place with the current item: */
      if (
        b[i].dataset.name.toLowerCase() > b[i + 1].dataset.name.toLowerCase()
      ) {
        /* if next item is alphabetically
            lower than current item, mark as a switch
            and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
          and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

export default function SortList() {
  const classes = useStyles();
  const [order, setOrder] = React.useState("");

  const handleChange = (event) => {
    setOrder(event.target.value);

    if (event.target.value === 1) {
      sortAlphabetically();
    }
  };

  return (
    <React.Fragment>
      {/* <button onClick={sortAlphabetically}>sort list</button> */}
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Järjestä</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={order}
          onChange={handleChange}
        >
          <MenuItem value={1}>Alkukirjaimen mukaan</MenuItem>
          {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </React.Fragment>
  );
}
