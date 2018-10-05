const postReducer = ( state = [], action ) => {
	switch (action.type){
		case "ADD_POST" :
			return state.concat([action.data]);
		case "EDIT_POST" :
			const newState = state.map( post => {
				if (post.id === action.data.id){
					post.editing = true;
				}
				return post;
			});
			return newState;
		case "REPLACE_POST" :
			return state.map( post => {
				if (post.id === action.data.id){
					post.editing = false;
					post.title = action.data.title;
					post.message = action.data.message;
				}
				return post;
			});
		case "DEL_POST" :
			return state.filter(post => post.id !== action.data.id );
		default :
			return state;
	}
}
export default postReducer;