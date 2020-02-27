import React, { Component } from 'react';
import './LifeCycleComp.css';

class LifeCycleComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }

    render() {
        return (
            <button className="btn"> Component Button</button>
        )
    }
}

export default LifeCycleComp;