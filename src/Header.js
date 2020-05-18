import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import "./Header.scss";

export default function Header(props) {
  return (
    <React.Fragment>
      <AppBar className="Header">
        <Toolbar className="Toolbar">
          <nav>
            <Link to="/">Lemmikkipalvelut.fi</Link>
            <ul>
              {/* <li>
                <Link to="/">Etusivu</Link>
              </li> */}
              <li>
                <Link to="/elainlaakarit">Eläinlääkärit</Link>
              </li>
              {/* <li>
                <Link to="/elaintarvikeliikkeet">Eläintarvikeliikkeet</Link>
              </li> */}
              {/* <li>
                <a href="/ulkoilu-ja-liikunta">Ulkoilu ja liikunta</a>
              </li>
              <li>
                <a href="/hyvinvointi">Hyvinvointi</a>
              </li>
              <li>
                <a href="/yhdistykset">Yhdistykset</a>
              </li>
              <li>
                <a href="/tapahtumat">Tapahtumat</a>
              </li> */}
            </ul>
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
