import React from 'react'
// import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';
// import Product from '../product/Product';
import BlogPost from '../BlogPost/BlogPost';


class Home extends React.Component {
    render() {
        return (
            <div>
                {/* <h1>Youtube</h1>
                <hr></hr>
                <YoutubeComp time='05:30'title='Dota wtf 203'/>
                <YoutubeComp time='08:20'title='Dota wtf 204'/>
                <YoutubeComp/> */}

                {/* <h1>Product</h1>
                <hr/>
                <Product/> */}

                <BlogPost/>
            </div>
        )
    }
}



export default Home;