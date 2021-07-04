import { React } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CardTask from "../components/CardTask";
import "./home.css";
import ModalTask from "../components/ModalTask";

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
  '@media screen and (min-width: 52em)' :{
    centered: {      
      maxWidth: '100em'
    }
  },

}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.centered}>
        <div className={classes.taskContainer}>
          <CardTask />
          <CardTask />
          <CardTask />
          <CardTask />
          <CardTask />
          <CardTask />
          <CardTask />
        </div>
      </div>
      <ModalTask />
    </div>
  );
};

export default Home;
