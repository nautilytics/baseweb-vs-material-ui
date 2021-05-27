import React from 'react';
import MaterialUIApp from "../MaterialUIApp";
import {createMuiTheme, CssBaseline, ThemeProvider} from "@material-ui/core";
import {BrandPrimary100, BrandSecondary1} from "../../style-dictionary-dist/variables";

function MaterialUIAppContainer() {

    // default theme - https://material-ui.com/customization/default-theme/
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: BrandPrimary100
            },
            secondary: {
                main: BrandSecondary1
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <MaterialUIApp/>
        </ThemeProvider>
    );
}

export default MaterialUIAppContainer;
