import React from "react";

export default function GetRandonNumber(props) {
    const min = props.min
    const max = props.max
    const RandomNumber = parseInt(Math.random() * (max - min));
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>
                <strong>Valor Mínimo:</strong> {min}
            </p>
            <p>
                <strong>Valor Máximo:</strong> {max}
            </p>
            <p>
                <strong>Valor Aleatório:</strong> {RandomNumber}
            </p>
        </div>
    )
}