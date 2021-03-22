import './App.css';
import { PersonsTable } from "./PersonsTable";

let persons = [
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
];


function App() {
  return (
    <div>
      <h1>Teams Networking</h1>
      <div>Search</div>
      <PersonsTable  persons={persons} border = {0}/>
    </div>
  );
}

export default App;
