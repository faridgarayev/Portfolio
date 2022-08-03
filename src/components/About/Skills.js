import React from 'react'

import { technicalSkills } from '../../data'
import { professionalSkills } from '../../data'

const Skills = () => {
    return (
        <div className="skills">
            <div className="row">
                <div className="col-md-5 col-sm-12 my-4">
                    <h3>Technical Skills</h3>
                    {technicalSkills.map((skill) => (
                        <div className="skill" key={skill.id}>
                            <div className="skill-name">{skill.name}</div>
                            <div className="skill-bar">
                                <div className="skill-per" per={skill.per} style={{ width: `${skill.per}%` }} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="col-md-5 col-sm-12 my-4">
                    <h3>Professional Skills</h3>
                    {professionalSkills.map((skill) => (
                        <div className="skill" key={skill.id}>
                            <div className="skill-name">{skill.name}</div>
                            <div className="skill-bar">
                                <div className="skill-per" per={skill.per} style={{ width: `${skill.per}%` }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills