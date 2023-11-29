import { combineReducers } from "redux";
import { productReducer } from "./productsReducer";


// export const rootReducer = combineReducers({


const reducers = combineReducers({
    allProducts: productReducer,
});

export default reducers;