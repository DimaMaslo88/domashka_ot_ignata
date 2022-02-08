import React from 'react'

import PreJunior from "./pages/PreJunior";
import {Navigate, Route, Routes} from "react-router-dom";
import {Junior} from './pages/junior';
import {JuniorPlus} from "./pages/juniorPlus";
import { Error404 } from './pages/Error404';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/Junior',
    JUNIOR_PLUS: '/Junior-plus'
    // add paths
}

function RoutesComponent() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route path={'/'} element={() => <Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                // add routes

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default RoutesComponent
