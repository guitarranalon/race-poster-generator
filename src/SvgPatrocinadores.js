import React, { Component } from 'react';
import './SvgPatrocinadores.css';
import Grid from './Grid.js';

class SvgPatrocinadores extends Component {

	createSponsorPhotos(){
		let xcurrent;
		let ycurrent;
		const imageWidth = Grid.widthOfColumns(4);
		const imageHeight = 150;
		const imagesMarginTop = 20;
		
		return this.props.infoPatrocinadores.map(function(patro, i){
			xcurrent = Grid.getMarginWidth() + (i%3)*imageWidth + (i%3) * Grid.getGutterWidth();
			ycurrent = imagesMarginTop + Math.floor(i/3)*(imageHeight + Grid.getGutterWidth());
			return <image x={xcurrent} y={ycurrent} width={imageWidth} height="150" key={patro.nombre}  xlinkHref={patro.foto} />
		});
	}

	render(){
		return (
			<g transform={`translate(0, ${this.props.sponsorTop})`}>
				{this.createSponsorPhotos()}
			</g>
		);
	}
}

export default SvgPatrocinadores;