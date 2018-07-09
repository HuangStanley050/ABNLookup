import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/*global fetch*/

class App extends Component {
  state = {
    entityName: "Place Holder",
    input: ""
  }

  /*componentDidMount() {
    fetch('/users/34')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }*/

  handleInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.apiCall(this.state.input);
    //alert(this.state.input);
  }

  apiCall = (input) => {
    fetch('users/' + input)
      .then((response) => {
        return response.json();
      })
      .then(res => this.setState({ entityName: res.EntityName }));

  }

  render() {
    return (

      <div className="App">
        <h1>Input an ABN Number:</h1>
        <form onSubmit={(event)=>this.handleSubmit(event)}>
        <input id="number"type="text" onChange={this.handleInputChange}/>
        <input type="submit"/>
       
        </form>
         <p>{this.state.entityName}</p>
        </div>

    );
  }
}


export default App;

/*{this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
  */
