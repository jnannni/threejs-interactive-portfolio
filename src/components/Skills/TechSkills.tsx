import React from 'react'

const skills = [
    {
        "name": "JavaScript",
        "level": "80"
    },
    {
        "name": "JavaScript",
        "level": "80"
    },
    {
        "name": "JavaScript",
        "level": "80"
    },
    {
        "name": "JavaScript",
        "level": "80"
    }
]
const TechSkills = () => {
  return (
    <div>
        <h2>Tech Skills</h2>
        {skills.map((skill, index) => 
            <div key={index}>
                <h4>{skill.name}</h4>
                <div className='tech-bar'><div className='level' style={{width: skill.level + '%'}}></div></div>
            </div>)}
    </div>
  )
}

export default TechSkills