import React, { Component } from 'react';
import YoutubeComp from '../../component/YoutubeComponent/YoutubeComp';
import Product from '../Product/Product';

class Home extends Component {
    render() {
        return (
            <div>
                <p>Youtube Component</p>
                <hr />
                <YoutubeComp title="Video 1" desc="ini video 1" />
                <YoutubeComp title="Video 2" desc="ini video 2" />
                <YoutubeComp title="Video 3" desc="ini video 3" />
                <YoutubeComp title="Video 4" desc="ini video 4" />
                <YoutubeComp />
                <p>Counter</p>
                <hr />
                <Product />
            </div>

        )
    }
}

export default Home;