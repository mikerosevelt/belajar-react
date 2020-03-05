import React, { Component, Fragment } from 'react';
import YoutubeCompPage from '../../../component/YoutubeComponent/YoutubeComp';

class YoutubeComp extends Component {
    render() {
        return (
            <Fragment>
                <YoutubeComp title="Video 1" desc="Desc video 1" />
            </Fragment>
        )
    }
}

export default YoutubeCompPage;