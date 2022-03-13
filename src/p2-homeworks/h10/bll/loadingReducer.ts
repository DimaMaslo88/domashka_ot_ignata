const initState = {
isLoading:false
}

type loadingACType={
    type:'CHANGE'
    loading:boolean
}
export type StateType={
    isLoading:boolean
}

export const loadingReducer = (state = initState, action: loadingACType):StateType => { // fix any
    switch (action.type) {
        case 'CHANGE': {

            return {...state,isLoading:action.loading}
        }
        default: return state
    }
}

export const loadingAC = (loading:boolean): loadingACType => {
    return {type:"CHANGE", loading}
} // fix any