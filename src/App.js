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

      handleClickOnImage = id => {
        if (this.state.clicked.includes(id)) {
          alert('Game Over. Try again.');
          this.resetGame();
        } else {
          this.setState(
            prevState => ({
              clicked: [...prevState.clicked, id],
              choices: this.randomize(this.state.choices)
            }),
            () => {
              this.checkHighScore();
              this.handleWin();
            }
          );
        }
      };

      checkHighScore = () => {
        if (this.state.clicked.length > this.state.highScore) {
          this.setState({highScore: this.state.clicked.length});
        }
      };
    
    
      handleWin = () => {
        if (this.state.clicked.length === this.state.choices.length) {
          alert('You Win!');
          this.resetGame();
        }
      };
    
    
      render() {
    
        const {clicked, highScore, choices} = this.state;
    
        return (
          <Container>
            <Jumbotron score={clicked.length} highScore={highScore} dark />
            <Row helper={`justify-content-center`}>
              {choices.map(({ id, name, image }) => {
                return (
                  <Column key={id} md={2}>
                    <Card header={name} dark>
                      <Image
                        id={id}
                        name={name}
                        image={image}
                        handleClickOnImage={this.handleClickOnImage}
                      />
                    </Card>
                  </Column>
                );
              })}
            </Row>
          </Container>
        );
      }
    }
    
    export default App;