import React, { Component } from 'react';
import '../../css/Entree.css';
import entree from '../modules/entree';
import { Collapse, Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class Entree extends Component {
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
        this.genererEntree();
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

    render() {
        return (
            <div>
                <Card>
                    <CardBlock>
                        <CardTitle>ENTREE</CardTitle>
                        <CardSubtitle>{this.state.titreEntree}</CardSubtitle>
                    </CardBlock>
                    <CardImg className="Image" top width="90%" src={this.state.imageEntree} alt={this.state.imageEntree} />
                    <CardBlock>
                        <Button color="primary" size="sm" onClick={this.toggle}>Détails</Button>
                        <Collapse isOpen={this.state.collapse}>
                            <Card>
                                <CardBlock>
                                    <CardText>{this.state.detailEntree}</CardText>
                                </CardBlock>
                            </Card>
                        </Collapse>
                    </CardBlock>
                    <CardBlock>
                        <Button color="danger" size="sm" onClick={e => this.genererEntree(e)}>Autre entrée</Button>
                    </CardBlock>
                </Card>
            </div>
        );
    }
}

