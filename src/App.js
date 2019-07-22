import React, { Component } from 'react';
import './App.scss';
import axios from 'axios';

const postsApi = "https://jsonplaceholder.typicode.com/posts";
const usersApi = "https://jsonplaceholder.typicode.com/users";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      users: [],
      error: '',
      loading: false,
    }
    this.showMore = this.showMore.bind(this);
  }
  async componentDidMount() {
    this.setState({ loading: true });

    try {
      const [postsResponse, usersResponse] = await Promise.all([
        axios.get(postsApi),
        axios.get(usersApi)
      ]);
      this.setState({
        posts: postsResponse.data,
        users: usersResponse.data,
        loading: false,
      })
      // this.state.posts[0].user = this.state.users[0].name;
    } catch (err) {
      console.log(err);
      this.setState({
        error: err.message,
        loading: false
      });
    }
  }
  showMore(e) {
    console.log(e.target.getAttribute("id"))
    this.setState({
    })
  }
  render() {
    const { posts, users, loading, error } = this.state;
    console.log(users, posts, Array.isArray(posts[0]), error);
    if (error) {
      return (
        <p className="error">{error}</p>

      )
    }

    if (loading) {
      return (
        <h4 className="loading">Loading posts ...</h4>
      )
    }

    posts.forEach(post => {
      users.forEach(user => {
        if (post.userId === user.id) {
          post.user = user.name
        }
      })
    })

    return (
      <div className="App">
        {posts.map(post =>
          <div className="post" key={post.id}>
            <h3>{post.title}</h3>
            <p id={post.id} onClick={this.showMore}>Read more ...</p>
            <div id={post.id} className="post-container">
              <p className="post-body">{post.body}</p>
              <h4 className="post-user">{post.user}</h4>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
