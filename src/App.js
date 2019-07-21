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
async componentDidMount() {
  try {
    const [postsResponse, usersResponse] = await Promise.all([
      axios.get(postsApi),
      axios.get(usersApi)
    ]);
    this.setState({
      posts: postsResponse.data,
      users: usersResponse.data
    })
  } catch(err) {
    console.log(err)
  }
  
  
}
render() {
  console.log(this.state.users, this.state.posts)
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <p>{this.state.posts[0].title}</p> */}
    </div>
  );
}
  
}

export default App;
