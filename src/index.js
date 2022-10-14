import ReactDOM from "react-dom"
import React from 'react'
import './index.css'
import Primeiro from "./Components/basicos/PrimeiroComponente"

const tag = <strong> Oláa React!!</strong>
ReactDOM.render
(
    <div>
        {tag}
        <Primeiro></Primeiro>
    </div>, 
    document.getElementById('root') 
)