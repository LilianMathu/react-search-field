import React, { Component } from "react";

const people = [
  {
    id: 1,
    name: "Lilian",
    age: 2
  },
  {
    id: 2,
    name: "alex",
    age: 3
  }
];

class App extends Component {
  state = {
      people: people,
      term: ''
  };

onChange = (e)=> this.setState({term: e.target.value});

  render() {
    return (
      <div className='App'>
        <form>
          <input 
          type="text" 
          placeholder="search..." 
          name="search" 
          onChange={this.onChange}
          />
        </form>
        {
          people.map(person=> (
            <div key={person.id}>
            <p>
            {person.name}
            </p>
            </div>
          ))
        }
      </div>
    )
  }
}

export default App;
