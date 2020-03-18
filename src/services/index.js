
import Get from './Get';
import Post from './Posts'
import Put from './Put';
import Delete from './Delete';

//post
const postNewsBlog = (data) => Post('posts', false, data)

//put
const updateNewsBlog = (data, id) => Put(`posts/${id}`, false, data)

//Delete
const deleteNewsBlog = (id) => Delete(`posts/${id}`, false)

//get
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false)
const getComments = () => Get('comments', true)

const API = {
    getNewsBlog, 
    getComments,
    postNewsBlog,
    updateNewsBlog,
    deleteNewsBlog
}

export default API;