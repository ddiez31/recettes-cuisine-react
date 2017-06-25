import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Sound from 'react-sound';
import music from '../modules/music';

export default class Music extends Component {
    state = {};

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    genererMusic = event => {
        const keysArray = Object.keys(music);
        const randomKey = keysArray[Math.floor(Math.random() * keysArray.length)];
        if (this.state.music === music[randomKey].mp3) {
            this.genererMusic();
            return;
        };
        this.setState(music[randomKey]);
    };

    render() {
        return (
            <div>
                <Button color="success" onClick={e => this.genererMusic(e)}>Musique</Button>
                <Sound
                    url={this.state.mp3}
                    playStatus={Sound.status.PLAYING}
                    playFromPosition={300 /* in milliseconds */}
                    onLoading={this.handleSongLoading}
                    onPlaying={this.handleSongPlaying}
                    onFinishedPlaying={this.handleSongFinishedPlaying} />
            </div>
        );
    }
}

