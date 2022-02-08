import React from 'react'
import style from "./Message.module.css"

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={style.block}>
            <div>
                <div className={style.ava}><img src={props.avatar} alt={'avatar'}/>
                </div>
                <div className={style.speech}>

                    <div className={style.name}>
                        {props.name}
                    </div>
                    <div className={style.message_1}>
                        {props.message}
                    </div>
                    <div className={style.time}>
                        {props.time}
                    </div>
                </div>

            </div>
        </div>


    )
}

export default Message