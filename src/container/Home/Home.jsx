import React, { Component, Fragment, createContext } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import './Home.css';
import YoutubeCompPage from '../pages/YoutubeComp/YoutubeCompPage';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';

export const RootContext = createContext();
const Provider = RootContext.Provider;

class Home extends Component {
    // Global State
    state = {
        totalOrder: 0
    }

    dispatch = (action) => {
        if (action.type === 'PLUS_ORDER') {
            return this.setState({
                totalOrder: this.state.totalOrder + 1
            })
        }
        if (action.type === 'MINUS_ORDER') {
            if (this.state.totalOrder > 0) {
                return this.setState({
                    totalOrder: this.state.totalOrder - 1
                })
            }
        }

    }

    render() {
        return (
            <Router>
                <Provider value={
                    {
                        state: this.state,
                        dispatch: this.dispatch
                    }
                }>
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
                </Provider>
            </Router>
        )
    }
}

export default Home;