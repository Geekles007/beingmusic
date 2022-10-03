import './App.css';
import {BrowserRouter} from "react-router-dom";
import RouteManager from "./modules/route-manager";

function App() {

    return (
        <>
            <BrowserRouter>
                <RouteManager />
            </BrowserRouter>
        </>
    )
}

export default App
