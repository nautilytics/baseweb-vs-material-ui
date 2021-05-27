import React from 'react';
import {makeStyles} from "@material-ui/core";
import MaterialUIApp from "../MaterialUIApp";
import {styled} from "baseui";
import SemanticUIApp from "../SemanticUIApp";
import BaseWebAppContainer from "../BaseWebAppContainer";

// Example of @material-ui/styles CSS-in-JS  [see developer console for debugging analysis]
const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        margin: 10
    }
}));

// Example of styled from baseui [see developer console for debugging analysis]
const Centered = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    margin: `10px`
});

function App() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Centered>
                <BaseWebAppContainer/>
                <MaterialUIApp/>
                <SemanticUIApp/>
            </Centered>
        </div>
    );
}

export default App;
