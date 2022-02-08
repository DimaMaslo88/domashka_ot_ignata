import React from 'react'
import {Link} from 'react-router-dom'
import {PATH} from "./Routes";
import style from './Header.module.css'
import {NavLink} from 'react-router-dom';

function Header() {

    return (
        <div className={style.Header}>
            <NavLink to={PATH.PRE_JUNIOR} className={style.junior}>pre_junior</NavLink>
            <Link to={PATH.JUNIOR} className={style.junior}>junior</Link>
            <Link to={PATH.JUNIOR_PLUS} className={style.junior}>junior+</Link>
            {/*<div className={style.block}/>*/}
        </div>
    )
}

export default Header
