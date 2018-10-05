import React, { Component } from 'react';
import AllPosts from './AllPosts';
import PostForm from './PostForm';

class App extends Component {
  render() {
      return (
      <div className="App">
  		<div className="navbar">
	    	<h2 className="center ">Post It</h2>
	        <PostForm />
	        <AllPosts />
      	</div>
      </div>
      );
  }
  }
export default App;