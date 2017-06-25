import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../css/App.css';
import bgImg from './modules/background';
import Entree from './components/EntreeCmpt';
import Plat from './components/PlatCmpt';
import Dessert from './components/DessertCmpt';
import Music from './components/MusicCmpt';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

export default class App extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  componentWillMount() {
    this.genererBgImg();
  }

  genererBgImg = event => {
    const keysArray = Object.keys(bgImg);
    const randomKey = keysArray[Math.floor(Math.random() * keysArray.length)];
    if (this.state.bgImg === bgImg[randomKey].bg_img) {
      this.genererBgImg();
      return;
    };
    this.setState(bgImg[randomKey]);
  };


  render() {
    return (
      <div className="App">
        <Jumbotron fluid style={{ backgroundImage: `url(${this.state.bg_img})` }}>
          <Container fluid>
            <Music />
            <h1 className="display-3">On mange quoi??</h1>
          </Container>
          <Container>
            <Row>
              <Col xs="6" sm="4">
                <Entree />
              </Col>
              <Col xs="6" sm="4">
                <Plat />
              </Col>
              <Col xs="6" sm="4">
                <Dessert />
              </Col>
            </Row>
          </Container>
          <Container fluid>
            <h1 className="display-3">Bon appétit!</h1>
          </Container>
        </Jumbotron>
      </div >
    );
  }
}

