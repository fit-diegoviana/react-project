import React from 'react'

import Fragmento from './Componets/basicos/Fragment';
import ComParametro from './Componets/basicos/ComParametro';
import Primeiro from './Componets/basicos/PrimeiroComponente';

export default _ =>
    <div id="app">
        <h1>Fundamentos React 2 (Arrow)</h1>
        <Fragmento />
        <ComParametro
            titulo="Situação do aluno"
            aluno="Diego"
            nota={4}
        />
        <Primeiro></Primeiro>
    </div>