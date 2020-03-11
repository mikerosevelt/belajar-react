import React, { Component, Fragment } from 'react';
import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Home.css';
import YoutubeCompPage from '../pages/YoutubeComp/YoutubeCompPage';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';

class Home extends Component {
    state = {
        showComponent: true
    }
    render() {
        return (
            <Router>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Home</Link><Link to="/product">Product</Link>
                        <Link to="/lifecycle">LifeCycle</Link>
                        <Link to="/youtubecomp">YoutubeCompPage</Link>
                    </div>

                    <Route path="/" exact component={BlogPost} />
                    <Route path="/detail-post/:id" component={DetailPost} />
                    <Route path="/product" component={Product} />
                    <Route path="/lifecycle" component={LifeCycleComp} />
                    <Route path="/youtubecomp" component={YoutubeCompPage} />
                </Fragment>
            </Router>
        )
    }
}

export default Home;