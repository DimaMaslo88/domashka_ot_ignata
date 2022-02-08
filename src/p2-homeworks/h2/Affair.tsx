import React from 'react'
import {AffairType} from "./HW2";



type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType// need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {//  // })// need to fix

    const deleteCallback =()=>{
props.deleteAffairCallback(props.affair._id)

    }
        return (
            <div>
                <ul>
                  <span>{props.affair.name}  </span>    <span> {props.affair.priority}</span>

                <button onClick={deleteCallback}>X</button>
                </ul>

            </div>
        )

}
    export default Affair
