import React from 'react'
import Block from './Block'
import { projects } from '../../data'

const Blocks = () => {
    return (
        <div className="blocks">
            <div className="container">
                <div className="blocksContainer">
                    {projects.map((item, index) => {
                        return (
                            <a href={item.link} rel="noreferrer" target="_blank" key={index} >
                                <Block item={item}
                                    h1={item.name}
                                    p1={item.paragraph1}
                                    p2={item.paragraph2}
                                    img={item.image}
                                />
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Blocks