import ReactDOM from "react-dom"
import React from 'react'
import './index.css'
import Primeiro from "./Components/basicos/PrimeiroComponente"
import ComParametro from "./Components/basicos/ComParametro"

const tag = <strong> Oláa React!!</strong>
ReactDOM.render
(
    <div>
        {tag}
        <Primeiro></Primeiro>
        <ComParametro 
         titulo="Situação do aluno"
         aluno="Diego"
         nota={4}/>
        <ComParametro 
         titulo="Situação do aluno"
         aluno="Barbara"
         nota={10}/>
    </div>, 
    document.getElementById('root') 
)