import axios from 'axios';
import React, { Component } from 'react';
import { CardList, SearchBar } from './components';
import styles from "./App.module.scss";

export default class App extends Component {
  constructor(props) {
     super(props);

     this.state = {
        monsters: [],
        searchField: '',
        isLoading: true,
     }
  }

  async componentDidMount() {
     try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

        this.setState({
           monsters: data,
           isLoading: false,
        });
     }
     catch(err) {
        console.error(err.message);
     }
  }

  handleQuery = e => {
     this.setState({
        searchField: e.target.value,
     });
  }

  render() {
    const { monsters, searchField, isLoading } = this.state;

    const filteredMonsters = monsters.filter(monster => {
       return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if(isLoading) {
       return <h1>Loading...</h1>
    }
    else {
       return (
            <main>
                <h1>Robodex</h1>
                <SearchBar handleQuery={this.handleQuery} searchField={this.state.searchField} />
                <CardList monsters={filteredMonsters} />
            </main>
       );
    }
  }
}
