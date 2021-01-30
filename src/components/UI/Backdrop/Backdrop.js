import React from 'react';

import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core';

/**
 * @returns {JSX.Element}
 * @author Stavros Labrinos [stalab at linuxmail.org] on 28/01/21.
 */

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff'
    }
}));

const CustomBackdrop = (props) => {
    const classes = useStyles();

    return (
        <Backdrop open={props.show} onClick={props.clicked} className={classes.backdrop}>
        </Backdrop>
    );
};

export default CustomBackdrop;