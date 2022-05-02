import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some','yellow'];


function HW12() {
    const dispatch=useDispatch()
    const theme = useSelector<AppStoreType,string>(state=>state.theme.themes); // useSelector
const onChangeCallback=(themes:string)=>{
    dispatch(changeThemeC(themes))
}
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
                <div> <SuperRadio
                    name={'radio'}
                    options={themes}
                     value={theme}
                     onChangeOption={onChangeCallback}
                /></div>
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
