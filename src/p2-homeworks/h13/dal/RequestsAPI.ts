import axios from "axios";

const instance=axios.create({
baseURL:"https://neko-cafe-back.herokuapp.com/auth"
})


 export const requestApi={
   createRequest(success:boolean){
return instance.post<RequestType>('test',{success})
    }
}



export type RequestType={
    errorText: string
    info: string
    yourBody:boolean
    yourQuery: {}

}