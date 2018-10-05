import React, {Component} from 'react';
import {connect} from 'react-redux';

class PostForm extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			'title' : '',
			'message' : ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		this.setState({
			[e.target.name] : e.target.value
		});
	}

	handleSubmit(e){
		e.preventDefault();
		const formData = new FormData(e.target);
		const title = this.state.title;
		const message = this.state.message;
		const data = {
			id: + new Date(),
			title,
			message,
			editing:false
		}
		this.props.dispatch({
			type: 'ADD_POST',
			data
		});
		this.setState({
			title: '',
			message: ''
		});
	}

	render(){
		return (
			<div className="post-container">
				<form className="form" onSubmit={this.handleSubmit}>
					<legend className="post-heading">Hi. Create a post</legend>
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
					<button>Post</button>
				</form>
			</div>
		);
	}

}
export default connect()(PostForm);