import React, { Component } from 'react';
import marked from 'marked';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Type here'
    };

    this.handleChange = this.handleChange.bind(this);
    
  }

  rawMarkup() {
    marked.setOptions({
			renderer: new marked.Renderer(),
			gfm: true,
			tables: true,
			breaks: false,
			pedantic: false,
			sanitize: true,
			smartLists: true,
			smartypants: false,
		})
		let rawMarkup = marked(this.state.data, {sanitize: true})
		return {
			__html: rawMarkup
		}
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ data: event.target.value })
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Markdown Previewer</h1>
        <div className="row">
          <div className="col-xs-6">
            <textarea id="userInput" value={this.state.data} onChange={this.handleChange} cols="60" rows="20"></textarea>
          </div>
          <div className="col-xs-6" dangerouslySetInnerHTML={this.rawMarkup()}></div>
        </div>        
      </div>
    )
  }

}

export default App;
