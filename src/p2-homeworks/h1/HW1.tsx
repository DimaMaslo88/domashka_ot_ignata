import React from 'react'
import Message from "./Message";


const messageData = {
    avatar: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg',
    name: 'Dima',
    message: 'Hello, my friend',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
                        homeworks 1



            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1