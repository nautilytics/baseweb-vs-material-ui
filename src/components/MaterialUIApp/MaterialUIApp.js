import React from 'react';
import Button from '@material-ui/core/Button';
import {Link, makeStyles, useTheme} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({ // you can access theme here
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: '25px',
        border: `0px solid ${theme.palette.primary.main}` // how to use here
    }
}));

function MaterialUIApp() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div>
            <h2 style={{border: `0px solid ${theme.palette.primary.main}`}}>
                Material UI
            </h2>
            <div className={classes.container}>
                <Button color="primary">
                    Hello World
                </Button>
                <Button variant="contained" color="secondary">
                    Hello World
                </Button>
                <Link>Link to something</Link>
            </div>
        </div>
    );
}

export default MaterialUIApp;
