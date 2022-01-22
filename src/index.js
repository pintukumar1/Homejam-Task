import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#fff",
		},
		secondary: {
			main: "#E5C558",
		},
	},
	typography: {
		fontFamily: ["Libre Baskerville", "Nunito", "Quattrocento"].join(","),
	},
});
ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
