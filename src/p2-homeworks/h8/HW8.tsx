import React, {useState} from 'react'
import {checkUsersAC, homeWorkReducer, sortUsersDownAC, sortUsersUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from '../h8/bll/HW8.module.css'
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import style from "../h12/HW12.module.css"
export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any
const theme=useSelector<AppStoreType,string>(state=>state.theme.themes)
    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div className={s.style}
             key={p._id}>
            <span>{p.name}</span>
            {p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortUsersUpAC()))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortUsersDownAC()))
    const chekedAge = () => setPeople(homeWorkReducer(initialPeople, checkUsersAC()))

    return (
        <div className={style[theme]}>
            <hr/>
            <span className={style[theme+"-text"]}>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}

            <div ><SuperButton onClick={sortUp} >sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={chekedAge}>check 18</SuperButton>
            </div>
        </span>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}

            <hr/>
        </div>
    )
}

export default HW8
