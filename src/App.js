import React, { Component } from 'react';
import Container from './components/Container/Container';
import Row from './components/Grid/Row';
import Column from './components/Grid/Column';
import Card from './components/Card/Card';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Image from './components/Image/Image';
import choices from './choices.json';
import './App.css';

class App extends Component {
    state = {
      choices,
      clicked: [],
      highScore: 0
    };

    componentDidMount() {
        this.setState({ choices: this.randomize(this.state.choices) });
    }

    randomize = array => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
    
        return array;
      };

    resetGame = () => {
        const randomizedChoices = this.randomize(this.state.choices);
    
        this.setState({
          clicked: [],
          choices: randomizedChoices
        });
      };