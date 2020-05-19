import { createMuiTheme } from "@material-ui/core/styles";
import { fiFI } from "@material-ui/core/locale";

const theme = createMuiTheme(
	{
		palette: {
			primary: { main: "#287d86" },
			secondary: { main: "#92568d" },
		},
		typography: {
			fontFamily: "Nunito Sans, sans-serif",
			body2: {
				fontSize: "1.3rem",
				fontWeight: "300",
			},
			h2: {
				fontWeight: 300,
				fontSize: "3rem",
			},
			h4: {
				fontSize: "1.15rem",
			},
		},
	},
	fiFI
);
export default theme;
