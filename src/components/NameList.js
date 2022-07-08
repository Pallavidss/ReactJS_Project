import React from 'react'


function NameList() {

    const persons = [
        {
            id: 1,
            name: 'bruce',
            age: 30,
            skill: 'react'
        },
        {
            id: 2,
            name: 'clark',
            age: 30,
            skill: 'angular'

        },
        {
            id: 3,
            name: 'diana',
            age: 30,
            skill: 'js'
        }
    ]
     const personList = persons.map(person =>(
        <h2>
            I am {person.name}. Iam {person.age} years old.I know {person.skill}
        </h2>
     ))
    
        
    return <div>{personList}</div>
}
export default NameList
