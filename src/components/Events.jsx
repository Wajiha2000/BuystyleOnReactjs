import React from 'react'
import { useState } from 'react'

const Events = () => {
    const [game, setgame] = useState("Counter Strike")
    return (
        <div className='events'>
            <h1 className='events-h1'>The choosen game is {game}</h1>
            <button className='events-btn' onClick={() => setgame("Snow Bross")}>Change The Game</button>
        </div>
    )
}

export default Events
