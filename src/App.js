import React, { Component } from 'react';
import './App.scss';
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Post from './components/Post';
import Users from './components/Users';
import Titles from './components/Titles';
import Nav from './components/Nav';


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
    return (
      <Router>
        <div className="App">
          <Nav />

          <Route
            path="/" exact
            render={(props) => <Post {...props}
              posts={this.state.posts}
              users={this.state.users}
              loading={this.state.loading}
              error={this.state.error}
            />}
          />

          <Route
            path="/titles" exact
            render={(props) => <Titles {...props}
              posts={this.state.posts} />}
          />

          <Route
            path="/users" exact
            render={(props) => <Users {...props}
              users={this.state.users} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
