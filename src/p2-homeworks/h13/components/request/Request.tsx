import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../h10/bll/store";
import {CreatePost, requestAC, StateType} from "../../bll/request-reducer";


export const Request = () => {
    const dispatch = useDispatch()
    const error = useSelector<AppStoreType, string>(state => state.request.errorText)
    const check = useSelector<AppStoreType, boolean>(state => state.request.success)
    // const [check, setCheck] = useState<boolean>(false)
    const takeRequest = () => {
        dispatch(CreatePost(check))
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(requestAC(e.currentTarget.checked))
    }
    //
    // const errorRes=()=>{
    //     if()
    // }

    return (
        <div>
            <button onClick={takeRequest}>Press</button>
            <input type={"checkbox"}
                   checked={check}
                   onChange={onChangeHandler}
            />
            <div>responce:
                {error}

            </div>
        </div>
    );
};