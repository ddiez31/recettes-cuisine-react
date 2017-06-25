import React, { Component } from 'react';
import '../../css/Plat.css';
import plat from '../modules/plat';
import { Collapse, Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button } from 'reactstrap';


export default class Plat extends Component {
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
        this.genererPlat();
    }

    genererPlat = event => {
        const keysArray = Object.keys(plat);
        const randomKey = keysArray[Math.floor(Math.random() * keysArray.length)];
        if (this.state.plat === plat[randomKey].detailPlat) {
            this.genererPlat();
            return;
        };
        this.setState(plat[randomKey]);
    };

    render() {
        return (
            <div>
                <Card>
                    <CardBlock>
                        <CardTitle>PLAT</CardTitle>
                        <CardSubtitle>{this.state.titrePlat}</CardSubtitle>
                    </CardBlock>
                    <CardImg className="Image" top width="90%" src={this.state.imagePlat} alt={this.state.imagePlat} />
                    <CardBlock>
                        <Button color="primary" size="sm" onClick={this.toggle}>Détails</Button>
                        <Collapse isOpen={this.state.collapse}>
                            <Card>
                                <CardBlock>
                                    <CardText>{this.state.detailPlat}</CardText>
                                </CardBlock>
                            </Card>
                        </Collapse>
                    </CardBlock>
                    <CardBlock>
                        <Button color="danger" size="sm" onClick={e => this.genererPlat(e)}>Autre plat</Button>
                    </CardBlock>
                </Card>
            </div>
        );
    }
}

