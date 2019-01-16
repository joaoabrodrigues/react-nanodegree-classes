import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './index.css'

const helloWordElement = React.createElement('div', {
    className: 'welcome-message'
}, React.createElement('strong', null, 'Hello world!'))

const peopleListElement = React.createElement('ol', null, 
    React.createElement('li', null, 'John'),
    React.createElement('li', null, 'Mary'),
    React.createElement('li', null, 'Joseph')
)

const people = [
    { name: 'John' },
    { name: 'Mary' },
    { name: 'Joseph' }
]

const peopleListElementWithMap = React.createElement('ol', null, 
    people.map(person => {
        return React.createElement('li', { key: person.name }, person.name)
    })
)

// JSX

const peopleListElementWithJSX = <ol>
    <li>{ people[0].name }</li>
    <li>{ people[1].name }</li>
    <li>{ people[2].name }</li>
</ol>

const peopleListElementWithMapAndJSX = <ol>
    { people.map(person => {
        return <li key ={person.name}> {person.name} </li>
    })}
</ol>

// Component

class ContactList extends Component { //React.Component {
    render() {
        return <div className='center-text'>
            <h1> My contacts </h1>
            <ol className='center-element'>
                { people.map(person => {
                    return <li key ={person.name}> {person.name} </li>
                })}
            </ol>
        </div>
    }
}

ReactDOM.render(
    <ContactList />,
    // [
    //     helloWordElement,
    //     peopleListElement,
    //     peopleListElementWithMap,
    //     peopleListElementWithJSX,
    //     peopleListElementWithMapAndJSX
    // ],
    document.getElementById('root')
)