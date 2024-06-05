
import {createStore,applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import {thunk} from "redux-thunk";
import { commonReducer } from "./components/redux/commonReducer";

const logger = createLogger();

const store = createStore(commonReducer,applyMiddleware(thunk,logger));
export default store;
