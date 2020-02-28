//libraries
import React, { Fragment } from 'react'

//pages
import Product from '../pages/product/Product';
import BlogPost from '../pages/BlogPost/BlogPost';
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';

//styling
import './Home.css'


class Home extends React.Component {
    render() {
        return ( 
            <Router>
            <Fragment>
                <div className="navigation">
                    <Link to="/">Blog Post</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/youtube">Youtube</Link>
                </div>
              <Route path="/" exact component={BlogPost} />
              <Route path="/detail-post/:postID" component={DetailPost} />
              <Route path="/product" component={Product} />
              <Route path="/youtube" component={YoutubeCompPage} />
            </Fragment>
            </Router>
        )
    }
}



export default Home;