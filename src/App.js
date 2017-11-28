import React, { Component } from 'react';
import marked from 'marked';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Change me'
    };
    this.handleChange = this.handleChange.bind(this);  
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ data: event.target.value })
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Markdown Previewer</h1>
        <div className='row'>
          <div className='col-xs-6'>
            <textarea value={this.state.data} onChange={this.handleChange} cols='60' rows='20'></textarea>
          </div>
          <div className='col-xs-6' dangerouslySetInnerHTML={{ __html:marked(this.state.data) }}></div>
        </div>
        <div className='text-center msg'>Here is a helpful <a href='https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet' target='_blank'>cheatsheet</a> for Markdown syntx via <a href='https://github.com/adam-p' target='_blank'>adam-p</a>.</div>         
      </div>
    )
  }
}

export default App;
