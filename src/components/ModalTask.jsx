import { React, useState } from "react";
import { useDispatch } from "react-redux";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from '@material-ui/core/Button';
import { addTask} from '../redux/actions/task.actions';
function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const ModalTask = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onAddTask =() => {
    let idtask = 1;
    idtask++;
    const task = {
      id: idtask,
      name : "prueba",
      description: "daalalala",
      estado: "dadasdasdasd",
    }
    console.log('add task', task);
    dispatch(addTask(task))    
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <Button variant="contained" onClick= {onAddTask} color="primary">
  Primary
</Button>
    </div>
  );
  return (
    <div>
     <Fab color="primary" className={classes.fab}  onClick={handleOpen} aria-label="add">
  <AddIcon />
</Fab>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default ModalTask;
