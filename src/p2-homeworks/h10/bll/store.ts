import {loadingReducer} from './loadingReducer'
import {applyMiddleware, combineReducers, createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";
import thunk from "redux-thunk";
import {requestReducer} from "../../h13/bll/request-reducer";

const reducers = combineReducers({
    loading: loadingReducer,
    theme:themeReducer,
    request:requestReducer

})

const store = createStore(reducers,applyMiddleware(thunk))

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
