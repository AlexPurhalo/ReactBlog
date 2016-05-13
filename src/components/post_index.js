//In this section we will provide a  'Data Fetching'

// Module
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

//
class PostIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts()
    }
    render() {
        return (
          <div>
              List of blog posts
          </div>
        );
    }
}


// In this way this could be looks
// function mapDispatchToProps(dispatch){
//     return bindActionCreators({ fetchPosts }, dispatch)
// }
// export default connect(null, mapDispatchToProps)(PostIndex);

// But we want make little refactor
// Also this could has '{ fetchPosts: fetchPosts } but we've made shortly 
export default connect(null, { fetchPosts })(PostIndex);