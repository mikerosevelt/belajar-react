import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';

// Get
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComments = () => Get('comments', true);

// Post
const postNewsBlog = (data) => Post('posts', false, data)

// Put
const updateNewsBlog = (id, data) => Put(`posts/${id}`, false, data);

// Delete
const deleteNewsBlog = (id) => Delete(`posts/${id}`, false);

const API = {
    getNewsBlog,
    getComments,
    postNewsBlog,
    updateNewsBlog,
    deleteNewsBlog
}

export default API;