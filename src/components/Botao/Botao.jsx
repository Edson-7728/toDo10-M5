import React from 'react'

const Botao = ({ texto, onClick }) => {
    return (
        <div>
            <button onClick={(e) => onClick(e)}>{texto}</button>
        </div>
    )
}

export default Botao