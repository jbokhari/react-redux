import React, { Component } from 'react';

import {connect} from 'react-redux';

class EditPost extends React.Component {
	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			title: props.post.title,
			'message': props.post.message
		};
	}
	onSubmit(e){
		e.preventDefault();
		const data = {
			id : this.props.post.id,
			message: this.state.message,
			title: this.state.title
		}
		this.props.dispatch({
			type: "REPLACE_POST",
			data
		})
	}
	handleChange(e){
		this.setState({
			[e.target.name] : e.target.value
		});
	}
	render(){
		return(
			<div key={this.props.post.id} className="post">
				<form className="form" onSubmit={this.onSubmit}>
					<div>
						<input 
							name="title"
							id="title"
							required
							placeholder='Enter Title...'
							type="text"
							onChange={this.handleChange}
							value={this.state.title} />
					</div>
					<div>
						<textarea 
							name="message"
							id="message"
							required
							placeholder="Enter content..."
							cols="30" rows="10"
							onChange={this.handleChange}
							value={this.state.message} >
						</textarea>
					</div>
					<button>Save</button>
				</form>
			</div>
		);
	}
}
export default connect()(EditPost);