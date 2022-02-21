import {UserType} from "../HW8";

type  GeneralType = sortUsersUpType|checkUserType| sortUsersDownType
let initialState: UserType[]

export const homeWorkReducer = (state: Array<UserType> = initialState, action: GeneralType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case "SORT_UP": {
            // need to fix
            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1
                else if(a.name <b.name) return -1
                else return 0

                }
            )
            return action.payload==="up"?newState:state
            }
        case "SORT_DOWN":{
            const newState = [...state].sort((a, b) => {
                    if (a.name > b.name) return -1
                    else if(a.name <b.name) return 1
                    else return 0

                }
            )
            return action.payload==="down"?newState:state
        }



        case "CHECK": {

            return  state.filter(f=>f.age>=action.payload)// need to fix


        }
        default:
            return state
    }
}

export type  sortUsersUpType = ReturnType<typeof sortUsersUpAC>

export const sortUsersUpAC = () => ({ type: "SORT_UP", payload:"up"}as const)


export type  sortUsersDownType = ReturnType<typeof sortUsersDownAC>
export const sortUsersDownAC = () => ({ type: "SORT_DOWN", payload:"down"}as const)



export type checkUserType = ReturnType<typeof checkUsersAC>
export const checkUsersAC = () => ({type: "CHECK", payload:18}as const)
