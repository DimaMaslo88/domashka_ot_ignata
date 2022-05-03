import {Dispatch} from "redux";
import {requestApi} from "../dal/RequestsAPI";

const initState = {
    success: false,
    errorText:""
}


export type StateType = {
    success: boolean
    errorText:string

}
type GeneralType=ErrorTextAC|RequestACType


export const requestReducer = (state = initState, action: GeneralType): StateType => { // fix any
    switch (action.type) {
        case 'REQUEST': {

            return {...state, success: action.success}
        }
        case "ERROR_TEXT":{
            return {...state,errorText:action.errorText}
        }
        default:
            return state
    }
}

type RequestACType = ReturnType<typeof requestAC>
export const requestAC = (success: boolean) => {
    return {
        type: "REQUEST",
        success
    } as const
} // fix any

type ErrorTextAC=ReturnType<typeof errorTextAC>
export const errorTextAC=(errorText:string)=>{
    return{
        type:"ERROR_TEXT",
        errorText
    }as const
}

export const CreatePost = (success: boolean) => (dispatch: Dispatch) => { // Thunk
    requestApi.createRequest(success)
        .then((res) => {
            dispatch(requestAC(res.data.yourBody))
            dispatch(errorTextAC(res.data.errorText))
        })
        .catch((error) => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
                dispatch(errorTextAC(error.response ? error.response.data.errorText : error.message))

            }
        )
}