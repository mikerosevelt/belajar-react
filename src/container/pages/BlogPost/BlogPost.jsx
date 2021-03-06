import React, { Component, Fragment } from 'react'
import Post from '../../../component/Post/Post';
// import axios from 'axios';
import API from '../../../service';

import './BlogPost.css';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false
    }

    getPostAPI = () => {
        API.getNewsBlog().then((result) => {
            this.setState({
                post: result
            })
        })

        // axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        //     .then((res) => {
        //         this.setState({
        //             post: res.data
        //         })

        //     })
    }

    handleRemove = (data) => {
        API.deleteNewsBlog(data).then((res) => {
            this.getPostAPI();
        })
        // axios.delete(`http://localhost:3004/posts/${data}`)
        //     .then((res) => {
        //         this.getPostAPI()
        //     })
    }

    handleFormChange = (e) => {
        let formBlogPostNew = { ...this.state.formBlogPost };
        let timestamp = new Date().getTime();
        if (!this.state.isUpdate) {
            formBlogPostNew['id'] = timestamp;
        }
        formBlogPostNew[e.target.name] = e.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    postDataToAPI = () => {
        API.postNewsBlog(this.state.formBlogPost).then((res) => {
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            })
        })

        // axios.post(`http://localhost:3004/posts`, this.state.formBlogPost)
        //     .then((res) => {
        //         // console.log(res);
        //         this.getPostAPI();
        //         this.setState({
        //             isUpdate: false,
        //             formBlogPost: {
        //                 id: 1,
        //                 title: '',
        //                 body: '',
        //                 userId: 1
        //             }
        //         })
        //     }, (err) => {
        //         console.log('error :', err);
        //     })
    }

    putDataToAPI = () => {
        API.updateNewsBlog(this.state.formBlogPost.id, this.state.formBlogPost)
            .then((res) => {
                this.getPostAPI();
                this.setState({
                    isUpdate: false,
                    formBlogPost: {
                        id: 1,
                        title: '',
                        body: '',
                        userId: 1
                    }
                })
            })

        // axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
        //     .then((res) => {
        //         this.getPostAPI();
        //         this.setState({
        //             isUpdate: false,
        //             formBlogPost: {
        //                 id: 1,
        //                 title: '',
        //                 body: '',
        //                 userId: 1
        //             }
        //         })
        //     })
    }

    handleSubmit = () => {
        if (this.state.isUpdate) {
            this.putDataToAPI();
        } else {
            this.postDataToAPI();
        }
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`);
    }

    handleUpdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    componentDidMount() {
        // GET API MENGGUNAKAN FETCH
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     })

        this.getPostAPI()
    }

    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="Add title" onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea value={this.state.formBlogPost.body} name="body" id="body" cols="30" rows="10" placeholder="Add blog content" onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Save</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;