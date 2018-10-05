import React, {Component} from 'react';

import { connect } from 'react-redux';

class Post extends React.Component{
	constructor(props){
		super(props);
		this.handleOnDelete = this.handleOnDelete.bind(this);
		this.handleOnEdit = this.handleOnEdit.bind(this);
	}
	handleOnDelete(){
		const data = {
			id : this.props.post.id
		}
		this.props.dispatch({
			type: "DEL_POST",
			data
		})
	}
	handleOnEdit(){
		const data = {
			id : this.props.post.id
		}
		this.props.dispatch({
			type: "EDIT_POST",
			data
		})
	}
	render(){
		const props = this.props;
		return (
			<div className="post">
				<h2 className="post-title">{props.post.title}</h2>
				<p className="post-message">{props.post.message}</p>
				<div className="control-buttons">
					<button className="edit" onClick={this.handleOnEdit}>Edit</button>
					<button className="delete" onClick={this.handleOnDelete}>Delete</button>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		posts : state
	}
}
export default connect(mapStateToProps)(Post);