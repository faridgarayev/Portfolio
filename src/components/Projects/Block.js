import React from 'react'

const Block = (props) => {
    return (
        <div className="block">
            <h1>{props.h1}</h1>
            <div className="pTags">
                <p>{props.p1}</p>
                <p>{props.p2}</p>
            </div>
            <img className="blockImg" src={props.img} alt={props.h1} />
        </div>
    )
}

export default Block