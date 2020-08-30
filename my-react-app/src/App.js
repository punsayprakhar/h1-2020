import React, { Component } from 'react';
import './App.css';
import './font.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Piyush Ravi', age: '29' },
      { name: 'Punsay', age: '24' }
    ],
    someOtherKey: "someOthervalue"
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Priyanka Chopra', age: '30' },
        { name: 'Nick Jonas', age: '20' }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler} >Switch name</button>

        {/*Using comments in jsx*/}
        {/* <Person  name="Max" age="28"/> 
              <Person name="Manu" age="29" > My Hobbies: Racing </Person> */}

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} textColor="blue-text" />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} textColor="purple-text" />

      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
