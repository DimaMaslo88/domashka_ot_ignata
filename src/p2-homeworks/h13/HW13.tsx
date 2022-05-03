import React from "react";
import s from "../h12/HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {Request} from "./components/request/Request";


const themes = ['dark', 'red', 'some','yellow'];


function HW13() {
    const dispatch=useDispatch()
    const theme = useSelector<AppStoreType,string>(state=>state.theme.themes); // useSelector
    const onChangeCallback=(themes:string)=>{

    }
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 13
                <div>
                <Request/>
                </div>
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW13;