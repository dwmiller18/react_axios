import React, {Component} from 'react';

import Post from '../../../components/Post/Post';
import axios from '../../../axios';
import './Posts.css';
import FullPost from '../FullPost/FullPost';
import {Route} from 'react-router-dom';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                /* Add things to do after get here otherwise it won't have time
                 * to fetch the data yet.  JavaScript does not wait to get the data */
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Dustin'
                    }
                })
                this.setState({posts: updatedPosts});
            }).catch(error => {
                console.log(error);
            // this.setState({error: true});
        });
    }

    postSelectedHandler = (id) => {
        // this.setState({selectedPostId: id})
        this.props.history.push('/posts/' + id);
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    // <Link to={'/posts/' + post.id} key={post.id}>
                        <Post
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}/>)
                    // </Link>)
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                    <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        )
    }
}

export default Posts;