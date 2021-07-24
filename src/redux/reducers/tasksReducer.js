import { ADD_TASK, EDIT_TASK, DELETE_TASK } from "../../const/actionTypes";
// import { get } from "lodash";

const initialState = { tasks: [] };

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };

    case EDIT_TASK:
      // eslint-disable-next-line no-unused-expressions
      return { ...state, tasks: state.tasks.map(task =>{ task.id === action.payload.id ? action.payload : task }) };

    case DELETE_TASK:
      return { ...state };

    default:
      return { ...state };
  }
}
