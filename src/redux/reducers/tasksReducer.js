import { ADD_TASK, EDIT_TASK, DELETE_TASK } from "../../const/actionTypes";
// import { get } from "lodash";

const initialState = {};

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return { ...state };
 
    case EDIT_TASK:
      return { ...state };


    case DELETE_TASK:
      return { ...state };

    default:
      return { ...state };
  }
}

