import React, {useEffect, useState} from "react";

import {makeStyles} from "@material-ui/core/styles";

import "./home.css";


const useStyles = makeStyles((theme) => ({
    fab: {
        position: "absolute",
        bottom: theme.spacing(6),
        right: theme.spacing(6),
    },
    root: {
        flexGrow: 1,
    },
    taskContainer: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    centered: {
        margin: '10px auto',
        padding: '0 1em',
    },
    '@media screen and (min-width: 52em)': {
        centered: {
            maxWidth: '100em'
        }
    },

}));

const Home = () => {
    return <div>HOla MUNDO </div>
};

export default Home;
