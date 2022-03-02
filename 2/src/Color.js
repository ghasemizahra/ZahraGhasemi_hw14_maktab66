import React, { Component } from 'react';

export default class Color extends Component {
    render(props) {
        return (
            <div className='justpallete '>
                <div style={{ background: `${this.props.color}` }} className="mysquare"></div>
                <h1>{this.props.color}</h1>
            </div>

        )
    }
} 