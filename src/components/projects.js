import React from 'react';
import './projects.css';
import Iframe from 'react-iframe'

export class Projects extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
        <Iframe url="https://github.com/Diskographi/Diskographi-github.io"
        width="650px"
        height="550px"
        id="jsClass"
        className="mangaShop"
        display="initial"
        position="relative"/>
        </div>
    }
}