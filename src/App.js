import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import entree from './entree';
import plat from './plat';
import dessert from './dessert';
import { Button } from 'reactstrap';


class App extends Component {
  state = {};

  componentWillMount() {
    this.genererEntree();
    this.genererPlat();
    this.genererDessert();
  }

  genererEntree = event => {
    const keysArray = Object.keys(entree);
    const randomKey = keysArray[Math.floor(Math.random() * keysArray.length)];
    if (this.state.entree === entree[randomKey].detailEntree) {
      this.genererEntree();
      return;
    };
    this.setState(entree[randomKey]);
  };

  genererPlat = event => {
    const keysArray = Object.keys(plat);
    const randomKey = keysArray[Math.floor(Math.random() * keysArray.length)];
    if (this.state.plat === plat[randomKey].detailPlat) {
      this.genererPlat();
      return;
    };
    this.setState(plat[randomKey]);
  };

  genererDessert = event => {
    const keysArray = Object.keys(dessert);
    const randomKey = keysArray[Math.floor(Math.random() * keysArray.length)];
    if (this.state.dessert === dessert[randomKey].detailDessert) {
      this.genererDessert();
      return;
    };
    this.setState(dessert[randomKey]);
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {this.state.titreEntree}
          {this.state.imageEntree}
          {this.state.detailEntree}
        </p>
        <Button color="danger" onClick={e => this.genererEntree(e)}>Autre entrée</Button>
        <p>
          {this.state.titrePlat}
          {this.state.imagePlat}
          {this.state.detailPlat}
        </p>
        <Button color="danger" onClick={e => this.genererPlat(e)}>Autre plat</Button>
        <p>
          {this.state.titreDessert}
          {this.state.imageDessert}
          {this.state.detailDessert}
        </p>
        <Button color="danger" onClick={e => this.genererDessert(e)}>Autre dessert</Button>
      </div>
    );
  }
}

export default App;
