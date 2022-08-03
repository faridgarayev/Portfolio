import React from 'react'

const Title = (props) => {
    return (
        <div className="abouttitle">
            <h6>{props.titleh6}</h6>
            <h1>{props.titleh1}</h1>
        </div>
    )
}

export default Title