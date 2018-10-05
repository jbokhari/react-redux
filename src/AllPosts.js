import React, {Component} from 'react';

import { connect } from 'react-redux';

import Post from './Post';
import EditPost from './EditPost';

class AllPosts extends React.Component {
	render(){
		const posts = this.props.posts.map( (post) => {
			return (
				<div key={post.id} >
					{post.editing ? <EditPost post={post} /> : <Post post={post} />}
				</div>
			);
		});
		return (
			<div >
				<h3 className="post-heading">All Posts</h3>
				<div>{posts}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state
	}
}

export default connect(mapStateToProps)(AllPosts);