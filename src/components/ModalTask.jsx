import {React, useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import {addTask} from "../redux/actions/task.actions";
import TextField from "@material-ui/core/TextField/TextField";


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


    textFieldContainer: {
        display: 'flex',
        flexDirection:'column'
    },
    textField:{
        width: '100%'
    },
    title:{
        backgroundColor: '#6746c3',
        color: 'white'
    }
}));

const ModalTask = ({onClose, selectedValue, open, task}) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [modalStyle] = useState(getModalStyle);
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm();


    const onSubmit = (data,e) => {
     //   e.preventdefault();
        console.log('add task', data);
        dispatch(addTask(data))
        reset();
        onClose(selectedValue);
    }

    const handleClose = () => {
        onClose(selectedValue);
     /*   console.log('add task', data);
        dispatch(addTask(data))*/
    };

    // const handleListItemClick = (value) => {
    //   onClose(value);
    // };

    return (
        <div>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"
                        fullWidth={true}
                        maxWidth="sm"
                >
                    <DialogTitle className={classes.title} id="form-dialog-title">Nueva tarea</DialogTitle>
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <DialogContent>
                        <div className={classes.textFieldContainer}>
                            <TextField
                                id="standard-basic"
                                label="Titulo"
                                className={classes.textField}
                                {...register("title", {required: true})}
                                defaultValue={task?.tittle}
                            />
                            <TextField
                                id="standard-multiline-static"
                                label="Descripcion"
                                multiline
                                rows={4}
                                className={classes.textField}
                                {...register("description", {required: true})}
                                defaultValue={task?.description}
                            />
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button  type="button" color="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                        <Button  type="submit" color="primary">
                            Guardar
                        </Button>
                    </DialogActions>
                    </form>
                </Dialog>
        </div>
    );
};

export default ModalTask;
