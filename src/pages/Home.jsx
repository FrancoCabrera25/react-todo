import { React } from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardTask  from "../components/CardTask";
import './home.css';
import ModalTask from "../components/ModalTask";

const useStyles = makeStyles((theme) => ({
  
    fab: {
      position: 'absolute',
      bottom: theme.spacing(6),
      right: theme.spacing(6),
    },
    root: {
      flexGrow: 1,
    },
    appContaner:{
      display: 'flex',
      flexDirection: 'column'
    },
    taskContainer:{
      display: 'flex',
      flexFlow: 'wrap',
      alignItems: 'stretch'

    }
    
  }));

const Home = () => {
    const classes = useStyles();
  return ( 
    <div className={classes.appContaner}>
    <div className={classes.taskContainer}> 
    <CardTask className="card-task" />
    <CardTask  className="card-task"/>
    <CardTask  className="card-task"/>
    <CardTask className="card-task"/>
    <CardTask className="card-task"/>
    </div>

 
    <ModalTask/>
     </div>
    
  );
};

export default Home;
