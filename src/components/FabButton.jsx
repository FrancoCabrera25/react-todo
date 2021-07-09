import { React, useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
 
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const FabButton = ({eventClick}) => {

  const classes = useStyles();

  // const eventClick = (e) => {
  //   e.
  //     console.log("hole");
  // };



  return (
     <Fab color="primary" className={classes.fab}  onClick={eventClick} aria-label="add">
  <AddIcon />
</Fab>
   
  );
};

export default FabButton;
