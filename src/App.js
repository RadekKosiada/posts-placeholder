import React, { Component } from 'react';
import './App.scss';
import axios from 'axios';
import Post from './components/post';

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
    } catch (err) {
      console.log(err);
      this.setState({
        error: err.message,
        loading: false
      });
    }
  }

  render() {
    const { loading, error } = this.state;
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

    return (
      <div className="App">
        <Post 
          posts={this.state.posts}
          users={this.state.users}        
        />
      </div>
    );
  }
}

export default App;
