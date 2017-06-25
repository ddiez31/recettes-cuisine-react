import React, { Component } from 'react';
import '../../css/Dessert.css';
import dessert from '../modules/dessert';
import { Collapse, Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button } from 'reactstrap';


export default class Dessert extends Component {
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
        this.genererDessert();
    }

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
            <div>
                <Card>
                    <CardBlock>
                        <CardTitle>DESSERT</CardTitle>
                        <CardSubtitle>{this.state.titreDessert}</CardSubtitle>
                    </CardBlock>
                    <CardImg className="Image" top width="90%" src={this.state.imageDessert} alt={this.state.imageDessert} />
                    <CardBlock>
                        <Button color="primary" size="sm" onClick={this.toggle}>Détails</Button>
                        <Collapse isOpen={this.state.collapse}>
                            <Card>
                                <CardBlock>
                                    <CardText>{this.state.detailDessert}</CardText>
                                </CardBlock>
                            </Card>
                        </Collapse>
                    </CardBlock>
                    <CardBlock>
                        <Button color="danger" size="sm" onClick={e => this.genererDessert(e)}>Autre dessert</Button>
                    </CardBlock>
                </Card>
            </div>
        );
    }
}

