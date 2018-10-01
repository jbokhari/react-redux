import React, {Component} from 'react';
class AllPosts extends React.Component {
	render(){
		const posts = [];
		return (
			<div>
				<h3>All Posts</h3>
				<div>{posts}</div>
			</div>
			);
	}
}
export default AllPosts;