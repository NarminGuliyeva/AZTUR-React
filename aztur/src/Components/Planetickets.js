import React from 'react'

function Planetickets({planetickets}) {
    return (
        <div>
            <img src={planetickets.img}></img>
            <h3>{planetickets.name}</h3>
            <p>{planetickets.info}</p>
            <button>Ətraflı</button>
        </div>
    )
}

export default Planetickets