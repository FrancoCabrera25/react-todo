import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import CardTask from "../components/CardTask";
import "./home.css";
import ModalTask from "../components/ModalTask";
import FabButton from "../components/FabButton";


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
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasksReducer.tasks);
    const [open, setOpen] = useState(false);
    /* useEffect(() => {
    //  console.log('tasks', tasks)
     }, [tasks]);*/

    const showModal = () => {
        setOpen(true)
    }
    const handleClose = (value) => {
        setOpen(false);
    }

    const classes = useStyles();
    return (
        <div>
            <div className={classes.centered}>
                <div className={classes.taskContainer}>
                    {tasks.map((item, index) => (
                        <CardTask key={index} {...item}/>
                    ))}
                </div>
            </div>
            <FabButton eventClick={showModal}/>
            <ModalTask open={open} onClose={handleClose}/>
        </div>
    );
};

export default Home;
