import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Caorousel from "@lib/index"
import './style.css'

const App = () =>{
    return (
        <div className='fck-examples'> 
            <h1> fck-table-forms</h1>
            <h3> GitHub Repository:
                <a target="__blank" href={"https://github.com/fonsecaBarreto/fck-products-carousel"}> @fonsecaBarreto/ck-products-carousel </a>
            </h3>
            
            <div>
                <Caorousel/>
            </div>
            <br/>
        </div>
    )
}

ReactDOM.render(<React.StrictMode> <App></App></React.StrictMode>, document.getElementById("root") );





