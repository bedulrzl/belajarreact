import React, { Component } from 'react'
import './DetailPost.css'
import Axios from 'axios';

class DetailPost extends Component {
    state = {
        post: {
            title: '',
            body: ''
        }
    }

    componentDidMount() {
        let id = this.props.match.params.postID;
        Axios.get(`http://localhost:3004/posts/${id}`).then(res => {
            console.log('resultzz:', res);
            let post = res.data
            this.setState({
                post: {
                    title: post.title,
                    body: post.body
                }
            })
        })
    }
    render() {
        return (
         <div>

            <p>{this.state.post.title}</p>
            <p>{this.state.post.body}</p>
         </div>
          
        );
    }
}

export default DetailPost;