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
            <div>
                <p>LifeCycle Component</p>
                <button className="btn"> Component Button</button>
            </div>
        )
    }
}

export default LifeCycleComp;