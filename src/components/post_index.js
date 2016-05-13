// Module
import React, { Component } from 'react';

// 1. We add our class component that render a data with posts to blog
class PostIndex extends Component {
// 2. Here we pass a 'componentWillMount' function that calls action creator to fetch posts data
    componentWillMount() {
// 3. To check that it works we can type this: console.log('calls action creator to fetch posts')
        
    }
    render() {
        return (
          <div>
              List of blog posts
          </div>
        );
    }
}

export default PostIndex;