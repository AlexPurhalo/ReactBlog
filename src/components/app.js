// Modules 
import React from 'react';
import { Component } from 'react';

// 3. To define a place of location for 'Greeting' component we return 'children' as property. '{this.props.children}'
export default class App extends Component {
  render() {
    return (
      <div>
        Header
        {this.props.children}
        Footer
      </div>
    );
  }
}
