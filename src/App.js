import { Component } from 'react';

import { ChampionsList } from './components/champions-list/ChampionsList.component'

import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      champions: {
        type: "",
        format: "",
        version: "",
        data: {}
      }
    };
  }

  componentDidMount() {
    fetch('http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion.json')
      .then(response => response.json())
      .then(champions => this.setState({ champions: champions }));
  }

  render() {
    return (
      <div className="App">
        <h1>League of Legends</h1>
        <h1>CHAMPIONS</h1>
        <ChampionsList champions={Object.values(this.state.champions.data)} />
      </div>
    );
  }
}

export default App;
