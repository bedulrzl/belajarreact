import React, { Component, Fragment } from 'react'
import './BlogPost.css';
import Post from '../../../component/Post/Post';
import axios from 'axios';
import API from '../../../services';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false,
        comments: []
    }

    

    getPostApi = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                post: result
            })
        })

        API.getComments().then(result => {
            this.setState({
                comments: result
            })
        })
      
    }

    postDatatoApi = () => {
        API.postNewsBlog(this.state.formBlogPost).then(result => {
            this.getPostApi();
            this.setState({
                 formBlogPost: {
                     id: 1,
                     title: '',
                     body: '',
                     userId: 1
                 },
             })
        }, (err) => {
            console.log(err);
        })
      
    }
    putDatatoApi = () => {
        API.updateNewsBlog(this.state.formBlogPost, this.state.formBlogPost.id).then(result => {
            this.getPostApi();
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                },
            })
        })
  
    }

    handleRemove = (data) => {
        console.log(data);
        API.deleteNewsBlog(data).then(result => {
            this.getPostApi()
        })
 
    }

    handleUpdate = (data) => {
        console.log(data);
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
       
    }

    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();

        if(!this.state.isUpdate) {
            formBlogPostNew['id'] = timestamp;
        }

        formBlogPostNew[event.target.name] = event.target.value;

        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    handleSubmit = () => {
        if(this.state.isUpdate) {
            this.putDatatoApi();
        } else {
            this.postDatatoApi();
        }
        
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`);
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
                    <input type="text" name='title' value={this.state.formBlogPost.title} placeholder='input title' onChange={this.handleFormChange}/>
                    <label htmlFor="">body</label>
                    <textarea name="body" id="" cols="30" rows="10" value={this.state.formBlogPost.body} onChange={this.handleFormChange}></textarea>
                    <button onClick={this.handleSubmit}>tambah data</button>
                </div>
{/* 
                {
                    this.state.comments.map(comments => {
                        return <p>{comments.name} - {comments.email}</p>
                    })
                } */}
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail}/>   
                    })
                }
                           
            </Fragment>
           
        )
    }
}

export default BlogPost;