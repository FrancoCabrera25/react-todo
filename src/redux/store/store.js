// import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";
import { createStore } from "redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
// import rootSaga from "../sagas";

const configureStore = () => {
  // const sagaMiddleware = createSagaMiddleware();
  return {
      ...createStore(rootReducer,composeWithDevTools()),
  //  ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
   //  runSaga: sagaMiddleware.run(rootSaga),
  };
};

export default configureStore;
