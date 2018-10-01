import React, {Component} from 'react';
class PostForm extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const title = formData.get('title');
		const message = formData.get('message');
		const data = {
			id: new Date(),
			title,
			message
		}
	}
	render(){
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<legend>Hi. Create a post</legend>
					<div>
						<input 
							name="title"
							id="title"
							required
							placeholder='Enter Title...'
							type="text" />
					</div>
					<div>
						<textarea 
							name="message"
							id="message"
							required
							placeholder="Enter content..."
							cols="30" rows="10" >
						</textarea>
					</div>
					<button>Post</button>
				</form>
			</div>
		);
	}
}
export default PostForm;