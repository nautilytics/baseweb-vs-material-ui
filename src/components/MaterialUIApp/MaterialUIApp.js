import React from 'react';
import Button from '@material-ui/core/Button';
import {Link, makeStyles, useTheme, TextField} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({ // you can access theme here
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: '25px',
        border: `0px solid ${theme.palette.primary.main}` // how to use here
    },
    innerContainer: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
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
                <form className={classes.innerContainer} noValidate>
                    <TextField
                        id="datetime-local"
                        label="Next appointment"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
            </div>
        </div>
    );
}

export default MaterialUIApp;
