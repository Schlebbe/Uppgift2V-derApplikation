import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme, Arwes, Button, withStyles } from 'arwes';
import logo from './logo.svg';
import './App.css';
import getData from '../src/Api.js';

// const App = () => (
//   <ThemeProvider theme={createTheme()}>
//     <Arwes>
//       <div style={{ padding: 20 }}>
//         <Button>My Button</Button>
//       </div>
//     </Arwes>
//   </ThemeProvider>
// );

async function fetchData(test) {
  let data = await getData(test);
  return data;
}
// fetchData();
// getData(59.33, 18);

class App extends Component {
  getLocations(test){
    let data = fetchData(test);
    console.log(data);
  }

  render() {
    return (
      <div>
        Sök:
        <input id="searchInput">1</input>
        <button id="searchButton" onClick={this.getLocations}>Sök</button>
      </div>
    );
  }
}

export default App;
