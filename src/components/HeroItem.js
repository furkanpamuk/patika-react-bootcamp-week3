import React from 'react'

function HeroItem({ item }) {
    return (
        <div key={item.id} className="frame">

            <img className="heroImg" src={item.thumbnail.path + "/portrait_incredible.jpg"} alt='' />

            <span className="heroName">{item.name}</span>
        
        </div>
    )
}

export default HeroItem;