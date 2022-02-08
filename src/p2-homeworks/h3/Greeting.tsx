import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string// need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    pushEnter:(e:KeyboardEvent<HTMLInputElement>)=>void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,pushEnter} // деструктуризация пропсов
) => {
    const inputClass =error? s.errorInput:s.input // need to fix with (?:)

    return (
        <div>
            <div>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                    onKeyDown={pushEnter}
                   onBlur={setNameCallback}
            />
                <span> <button onClick={addUser} disabled={!name}>add</button></span>
                <span>{totalUsers}</span>
            <div className={s.error}>{error}</div>
            </div>

        </div>
    )
}

export default Greeting
