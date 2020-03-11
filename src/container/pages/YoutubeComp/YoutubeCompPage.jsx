import React, { Component, Fragment } from 'react';
import YoutubeComp from '../../../component/YoutubeComponent/YoutubeComp';

class YoutubeCompPage extends Component {
    render() {
        return (
            <Fragment>
                <YoutubeComp title="Video 1" desc="Desc video 1" />
            </Fragment>
        )
    }
}

export default YoutubeCompPage;