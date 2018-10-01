import React, { Component } from 'react';
import AllPosts from './AllPosts';
import PostForm from './PostForm';

class App extends Component {
  render() {
      return (
      <div className="App">
        <PostForm />
        <AllPosts />
      </div>
      );
  }
  }
export default App;