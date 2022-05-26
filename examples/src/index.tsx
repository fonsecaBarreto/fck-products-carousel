import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Caorousel from "@lib/index"
import './style.css'


const records = [ 
    { nome: "Lucas Fonseca"},
    { nome: "Lucas Fonseca 2"},
    { nome: "Lucas Fonseca 3"},
    { nome: "Lucas Fonseca 4"},
    { nome: "Lucas Fonseca 5"},
    { nome: "Lucas Fonseca 6"},
    { nome: "Lucas Fonseca 7"},
]

const Item: React.FunctionComponent<any> = (props) =>{
    useEffect(()=>{
        console.log("prodpps",props)
    },[])
    return (<span className="item-teste">
        { JSON.stringify(props.nome)}
    </span>)
}
const App = () =>{
    return (
        <div className='fck-examples'> 
            <h1> fck-products-carousel</h1>
            <h3> GitHub Repository:
                <a target="__blank" href={"https://github.com/fonsecaBarreto/fck-products-carousel"}> @fonsecaBarreto/ck-products-carousel </a>
            </h3>
            
            <div>
                <Caorousel records={records} viewport_height={400}>
                    <Item/>
                </Caorousel>
            </div>
            <br/>
        </div>
    )
}

ReactDOM.render(<React.StrictMode> <App></App></React.StrictMode>, document.getElementById("root") );





