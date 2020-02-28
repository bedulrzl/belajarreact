import React, { Component, Fragment } from 'react'
import YoutubeComp from '../../../component/YoutubeComp/YoutubeComp';

class YoutubeCompPage extends Component {
    render () {
        return (
            <Fragment>
                <p>youtube component</p>
                <hr/>
                <YoutubeComp 
                    time="7.12"
                    title="tutorial reactjs"
                    desc="2x ditonton" />
                <YoutubeComp 
                    time="8.12"
                    title="tutorial reactjs"
                    desc="2x ditonton" />
            </Fragment>
        )
    }
}

export default YoutubeCompPage