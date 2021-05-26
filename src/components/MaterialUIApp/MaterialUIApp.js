import React from 'react';
import Button from '@material-ui/core/Button';
import {Link, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({ // you can access theme here
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: '25px'
    },
    button: {
        color: 'red'
    }
}));

function MaterialUIApp() {
    const classes = useStyles();

    return (
        <div>
            <h2>Material UI</h2>
            <div className={classes.container}>
                <Button className={classes.button}>
                    Hello World
                </Button>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
                <Link>Link to something</Link>
            </div>
        </div>
    );
}

export default MaterialUIApp;
