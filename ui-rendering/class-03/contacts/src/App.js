import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    const people = this.props.contacts
    return <div>
          <h1> My contacts </h1>
          <ol>
              { people.map(person => {
                  return <li key ={person.name}> {person.name} </li>
              })}
          </ol>
      </div>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={[
          { name: 'John' },
          { name: 'Mary' },
          { name: 'Joseph' }
        ]} />
        <ContactList contacts={[
          { name: 'Tyler' },
          { name: 'Karen' },
          { name: 'Richard' }
        ]} />
        <ContactList contacts={[
          { name: 'Amanda' },
          { name: 'Mikenzi' },
          { name: 'Ryan' }
        ]} />
      </div>
    );
  }
}

export default App;
