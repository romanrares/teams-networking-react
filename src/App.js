import { Component } from 'react';
import './App.css';
import { PersonsTable } from "./PersonsTable";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      persons: []
    }    
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        persons: [
          {
            "id": "a123",
            "firstName": "Raresa123",
            "lastName": "Roman",
            "github": "https://github.com/romanrares"
          },
          {
            "id": "b654",
            "firstName": "Nicolae",
            "lastName": "Matei",
            "github": "http://nmatei.github.io/"
          }
        ]
      })
    }, 2000);
  }


  render() {
    return (
      <div>
        <h1>Teams Networking</h1>
        <div>Search</div>
        <PersonsTable persons={this.state.persons} border={0} />
      </div>
    );
  }
}

export default App;
