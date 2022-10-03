import React, {memo} from "react";
import {Route, Routes} from "react-router-dom";
import DiscoverUI from "../discover";
import LayoutUI from "../../layout";

type RouteManagerProps = {}

const RouteManager = ({}: RouteManagerProps) => {

    return <>
        <Routes>
            <Route path={"/"} element={<LayoutUI />}>
                <Route index element={<DiscoverUI/>}/>
            </Route>
        </Routes>
    </>

}

export default memo(RouteManager);
