import { ADD_TASK, EDIT_TASK, DELETE_TASK } from "../../const/actionTypes";

export const addTask = (payload) => ({
  type: ADD_TASK,
  payload,
});

export const editTask = (payload) => ({
  type: EDIT_TASK,
  payload,
});

export const deleteTask = (payload) => ({
  type: DELETE_TASK,
  payload,
});
