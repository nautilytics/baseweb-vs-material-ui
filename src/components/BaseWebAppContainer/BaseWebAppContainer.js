import React from 'react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {BaseProvider, createTheme} from 'baseui';
import {BrandPrimary100} from '../../style-dictionary-dist/variables'
import BaseWebApp from "../BaseWebApp";

// https://baseweb.design/guides/theming/#customizing-your-theme
const engine = new Styletron();

const primitives = {
    accent: BrandPrimary100
};

const overrides = {
    colors: {
        buttonSecondarySpinnerBackground: primitives.accent,
    },
};

export const OverallTheme = createTheme(primitives, overrides);

function BaseWebAppContainer() {

    return (
        <StyletronProvider value={engine}>
            <BaseProvider theme={OverallTheme}>
                <BaseWebApp/>
            </BaseProvider>
        </StyletronProvider>
    );
}

export default BaseWebAppContainer;
