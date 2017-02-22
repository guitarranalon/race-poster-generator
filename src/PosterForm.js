import React, { Component } from 'react';
import './PosterForm.css';
import SvgPreview from './SvgPreview.js';

class PosterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {title: '', bgColor1: '#333', bgColor2: '#666', watermarkColor: '#fff', frontColor: '#fff', teamData: this.props.teamData , areGoing: new Set()};

    this.handleChange = this.handleChange.bind(this);
    this.handleBgColor1Change = this.handleBgColor1Change.bind(this);
    this.handleBgColor2Change = this.handleBgColor2Change.bind(this);
	this.handleWatermarkColorChange = this.handleWatermarkColorChange.bind(this);
    this.handleFrontColorChange = this.handleFrontColorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(event) {
    this.setState({title: event.target.value});
  }
  
  handleBgColor1Change(event){
    console.log(event.target.value);
	this.setState({bgColor1: event.target.value});
  }  
  
  handleBgColor2Change(event){
	this.setState({bgColor2: event.target.value});
  }
  
  handleWatermarkColorChange(event){
	this.setState({watermarkColor: event.target.value});
  }   
  
  handleFrontColorChange(event){
	this.setState({frontColor: event.target.value});
  }    

  handleSubmit(event) {
    event.preventDefault();
  }
  
  handleInputChange(event){
	console.log(event.target.name);
	
	const target = event.target;
	const value = target.type === 'checkbox' ? target.checked : target.value;
	const name = target.name;

	if(value){
		this.state.areGoing.add(name);
	}
	else{
		this.state.areGoing.delete(name);
	}
	
	this.forceUpdate();
  }
  
  render() {
  console.log(this.props.teamData.corredores.length);

	let members = this.props.teamData.corredores.map( i => <li key={i.nombre}><input type="checkbox" id={i.nombre} name={i.nombre} onChange={this.handleInputChange}  /><label htmlFor={i.nombre}>{i.nombre}</label></li> );

    return (
	  <div className="app">
      <form className="posterForm" onSubmit={this.handleSubmit}>
        <label>
          Título:
          <input type="text" value={this.state.title} onChange={this.handleChange} className="form-control" />
		 </label>		 
		 <label>
		  Color:
		  <input type="color" value={this.state.frontColor} onChange={this.handleFrontColorChange} />
        </label>		 
		 <label>
		  Inicio fondo:
		  <input type="color" value={this.state.bgColor1} onChange={this.handleBgColor1Change} />
        </label>
		 <label>
		  Fin fondo:
		  <input type="color" value={this.state.bgColor2} onChange={this.handleBgColor2Change} />
        </label>
		 <label>
		  Color marca agua:
		  <input type="color" value={this.state.watermarkColor} onChange={this.handleWatermarkColorChange} />
        </label>		
		<legend>Corredores:</legend>
		<ul>
			{members}
		</ul>
      </form>
	  <SvgPreview posterData={this.state} />
	  </div>
    );
  }
}

export default PosterForm;
