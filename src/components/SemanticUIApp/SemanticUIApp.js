import React from 'react';
import {Button} from 'semantic-ui-react';
import {makeStyles} from "@material-ui/core";
import {BrandPrimary100} from '../../style-dictionary-dist/variables'

const useStyles = makeStyles((theme) => ({ // you can access theme here
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: '25px'
    }
}));

function SemanticUIApp() {
    const classes = useStyles();

    return (
        <>
            <h2>Semantic UI</h2>
            <div className={classes.container}>
                <Button basic color={BrandPrimary100}>Hello World</Button>
                <Button>Hello World</Button>
            </div>
        </>
    );
}

export default SemanticUIApp;
