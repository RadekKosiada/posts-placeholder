import React, { Component } from 'react';
import './App.css';
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
  render() {
    const { posts, users, loading, error } = this.state;


    console.log(users, posts, Array.isArray(posts[0]), error);
    if (error) {
      return (
        <div className="App">
          <p>{error}</p>
        </div>
      )
    }

    if (loading) {
      return (
        <div className="App">
          <p>Loading posts ...</p>
        </div>
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
          <div key={post.id}>
            <h3 className="post">{post.title}</h3>
            <h4>{post.user}</h4>
            <p>{post.body}</p>
          </div>
        )}
      </div>
    );
  }

}

export default App;
