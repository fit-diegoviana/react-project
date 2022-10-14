import React from 'react'

import GetRandonNumber from './Componets/basicos/Aleatorio';
import Fragmento from './Componets/basicos/Fragment';
import ComParametro from './Componets/basicos/ComParametro';
import Primeiro from './Componets/basicos/PrimeiroComponente';

export default _ =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <GetRandonNumber min={1} max={60} />
        <Fragmento />
        <ComParametro
            titulo="Situação do aluno"
            aluno="Diego"
            nota={4}
        />
        <Primeiro></Primeiro>
    </ div>