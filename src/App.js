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
      error: ''
    }
  }
  async getPosts() {
    this.setState({ loading: true });
    try {
      const response = await axios.get(postsApi);
      console.log(response.data);
      this.setState({
        
      })
    } catch (err) {
      console.log(err)
      this.setState({
        error: err,
      });
    }
  }
  async getUsers() {
    this.setState({ loading: true });
    try {
      const response = await axios.get(usersApi);
      console.log(response.data);
      this.setState({
        
      })
    } catch (err) {
      console.log(err)
      this.setState({
        error: err,
      });
    }
  }

componentDidMount() {
  this.getPosts();
  this.getUsers();
}
render() {
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}
  
}

export default App;
