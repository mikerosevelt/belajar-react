import React, { Component, Fragment } from 'react';
import YoutubeComp from '../../component/YoutubeComponent/YoutubeComp';
import Product from '../Product/Product';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import BlogPost from '../BlogPost/BlogPost';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Home.css';
import YoutubeCompPage from '../pages/YoutubeComp/YoututbeCompPage';

class Home extends Component {
    state = {
        showComponent: true
    }
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Home</Link><Link to="/product">Product</Link>
                        <Link to="/lifecycle">LifeCycle</Link>
                        <Link to="/youtubecomp">YoutubeCompPage</Link>
                    </div>

                    <Route path="/" exact component={BlogPost} />
                    <Route path="/product" component={Product} />
                    <Route path="/lifecycle" component={LifeCycleComp} />
                    <Route path="/youtubecomp" component={YoutubeCompPage} />
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default Home;