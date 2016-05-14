import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
// 4. Under one of the input we gonna add div that shows error message, example: <div>'{title.error}'</div>
// 5. We add 'title.touched' to expression to add div with error only when we touch input
//    '{ title.touched ? title.error : '' }' if validation see something wrong it
//    add 'title.error' else add empty string ''
// 6. Also we want add red border with red text if we have problem.
//    For this we add one more class to div with form control
//    We add interpolation that helps show 'has-danger' class if we have a problem and otherwise we take empty class
    render() {
        const { fields: { title, categories, content }, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create a New Post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`} >
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">{title.touched ? title.error : ''}</div>
                </div>
                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`} >
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="text-help">{categories.touched ? categories.error : ''}</div>
                </div>
                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`} >
                    <label>Content</label>
                    <textarea className="form-control" {...content} />
                    <div className="text-help">{content.touched ? content.error : ''}</div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel </Link>
            </form>
        );
    }
}

// 1. Here we create a function for data validation
function validate(values) {
    const errors = {};
// 3. If data from title is false, undefined or null we show error
    if (!values.title) {
        errors.title = 'Enter a username'
    }
    if (!values.categories) {
        errors.categories = 'Enter a category'
    }
    if (!values.content) {
        errors.content = 'Enter the content'
    }

    return errors
}

// 2. Here we pass this function as third key of object that goes as argument to redux form function
export default reduxForm({
    form: 'PostNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, { createPost })(PostsNew);
