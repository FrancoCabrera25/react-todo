import { React } from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardTask  from "../components/CardTask";
import './home.css';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
      position: 'relative',
      minHeight: 200,
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing(6),
      right: theme.spacing(6),
    },
    
  }));

const Home = () => {
    const classes = useStyles();
  return (
    <div className="container">
    <div className="container-task"> 
    <CardTask className="card-task" />
    <CardTask  className="card-task"/>
    <CardTask  className="card-task"/>
    <CardTask className="card-task"/>
    <CardTask className="card-task"/>
    </div>
  
      <Fab color="primary" className={classes.fab} aria-label="add">
  <AddIcon />
</Fab>

    </div>
  );
};

export default Home;
