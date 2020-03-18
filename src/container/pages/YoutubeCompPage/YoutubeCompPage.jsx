import React, { Component, Fragment } from 'react'
import YoutubeComp from '../../../component/YoutubeComp/YoutubeComp';
// import {connect} from 'react-redux';


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

                            <hr/>
                            {/* <p>total order : {value.state.totalOrder} </p> */}
                        </Fragment>
        )
    }
}

// const mapsStateToProps = state => {
//     return {

//         order: state.totalOrder
//     }
// }

// export default connect(mapsStateToProps)(YoutubeCompPage)
export default YoutubeCompPage