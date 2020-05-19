import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import VetsPage from "./VetsPage";
import PageNotFound from "./PageNotFound";
import StoresPage from "./StoresPage";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import "./App.scss";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router basename="/demos/lemmikkipalvelut">
				<Header />
				<main>
					<Switch>
						<Route path="/" exact>
							<HomePage />
						</Route>
						<Route exact path="/elainlaakarit">
							<VetsPage />
						</Route>
						<Route exact path="/elaintarvikeliikkeet">
							<StoresPage />
						</Route>
						<Route component={PageNotFound} />
					</Switch>
				</main>
			</Router>
		</ThemeProvider>
	);
}
