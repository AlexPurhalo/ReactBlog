import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
// 4. Here we import an action
import { createPost } from '../actions/index';

class PostsNew extends Component {
    render() {
// 3. Here we make 'handleSubmit' with its own data available        
        const { fields: { title, categories, content }, handleSubmit } = this.props;
// 2. We use 'handleSubmit' function that provide much of features
//    When we try to submit a form 'handleSubmit' function tells to validate and continue do some operations
//    After submit this pass data to action controller
// 3. We use something like thus {...stuff} for every input to create connection between action and fields
// 6. Eventually we pass action to 'handleSubmit' function to post the request with data           
        return (
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create a New Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                </div>
                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea className="form-control" {...content} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

// 1. We create a function that will take the objects with name of form and fields
//    connect: takes as first argument mapStateToProps, as second mapDispatchToProps
//    reduxForm: takes as first form config and as second mapStateToProps, as third mapDispatchToProps
// 5. Here we add the second and third arguments where third is action
export default reduxForm({
    form: 'PostNewForm',
    fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);
