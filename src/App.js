import React, { Component } from 'react';
import './App.css';
import PosterForm from './PosterForm.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {title: '', bgColor: '#333', frontColor: '#fff'};

    this.handleChange = this.handleChange.bind(this);
    this.handleBgColorChange = this.handleBgColorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch(window.location + 'equipo.json')
      .then( (response) => {
        return response.json() })   
          .then( (json) => {
            this.setState({data: json});
          })
		  .catch((error)=>{
		    console.log("¡error!");
		  });
  }
  
  handleChange(event) {
    this.setState({title: event.target.value});
  }
  
  handleBgColorChange(event){
    console.log(event.target.value);
	this.setState({bgColor: event.target.value});
  }  

  handleSubmit(event) {
    event.preventDefault();
  }
  
  render() {
	// if the info has been already received...
	if (this.state.data !== undefined){
		// ... render the form
		return (<PosterForm teamData={this.state.data} />);
	}
	// else, if no info ...
	else{
		// ... render just a "loading" message
		return(<p className="loading">Cargando...</p>);
	}
  }
}

export default App;
