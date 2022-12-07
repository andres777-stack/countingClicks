import React from 'react';
import '../hojas-de-estilo/Contador.css'

function Contador(props) {
    return (
        <div class="contador">
            {props.numClics}
        </div>
    );
}

export default Contador;