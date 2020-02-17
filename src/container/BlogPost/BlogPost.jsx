import React, { Component, Fragment } from 'react'
import './BlogPost.css';
import Post from '../../component/Post/Post';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        }
    }

    

    getPostApi = () => {
        axios.get('http://localhost:3004/posts')
        .then((res) => {
            console.log(res);
            this.setState({
                post: res.data
            })
        })
    }

    handleRemove = (data) => {
        console.log(data);
        axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
            this.getPostApi()
        })
    }

    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        formBlogPostNew[event.target.name] = event.target.value;

        this.setState({
            formBlogPost: formBlogPostNew
        }, ()=> {
            console.log('value obj', this.state.formBlogPost)
        })
    }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })
        this.getPostApi();
       
    }

    render(){
        return(
            <Fragment>
                <p>Blogpost</p>
                <div className='formInput'>
                    <label htmlFor="">title</label>
                    <input type="text" name='title' placeholder='input title' onChange={this.handleFormChange}/>
                    <label htmlFor="">body</label>
                    <textarea name="body" id="" cols="30" rows="10" onChange={this.handleFormChange}></textarea>
                    <button>tambah data</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove}/>   
                    })
                }
                           
            </Fragment>
           
        )
    }
}

export default BlogPost;