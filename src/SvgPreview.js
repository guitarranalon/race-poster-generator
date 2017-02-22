import React, { Component } from 'react';
import './SvgPreview.css';
import SvgPatrocinadores from './SvgPatrocinadores.js';
import SvgDefs from './SvgDefs.js';
import Grid from './Grid.js';

const imagesMarginTop = 120;
const sponsorsHeight = 320;
const posterTitleFontSize = '50';
const stylesPrefix = `#posterTitle{`;
const svgStyles=`
		font-size:${posterTitleFontSize}px;
		font-style:normal;
		font-weight:normal;
		line-height:125%;
		letter-spacing:0px;
		word-spacing:0px;
		fill-opacity:1;
		stroke:none;
		font-family:League Gothic;
		font-stretch:normal;
		font-variant:normal;
`;
const stylesSufix = `	}`;

class SvgPreview extends Component {
 constructor(props){
	super(props);
	
	 this.descargarPoster = this.descargarPoster.bind(this);
 }
 
 downloadURI(uri, name) {
   var link = document.createElement("a");
   link.download = name;
   link.href = uri;
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
   //delete link;
 } 
 
 descargarPoster(event){
	//---- El encodeURIComponent y la expresión regular son necesarios para una correcta codificación utf-8 (si no, aparece como ANSI)
	let svg = 'data:image/svg+xml; charset=utf-8;base64,' + window.btoa(encodeURIComponent(document.getElementById('svgPreview').innerHTML).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
	event.preventDefault();
	this.downloadURI(svg, "poster.svg");
 }
 
 createMemberPhotos(){
	let conjunto = this.props.posterData.areGoing;
	let xcurrent = Grid.getMarginWidth();
	let ycurrent = imagesMarginTop;
	const imageWidth = Grid.widthOfColumns(3);
	
	let seleccionados = this.props.posterData.teamData.corredores.filter(function(member){
		return conjunto.has(member.nombre);
	});
	
	return seleccionados.map(function(obj, i) {
		xcurrent = Grid.getMarginWidth() + (i%4)*imageWidth + (i%4) * Grid.getGutterWidth();
		ycurrent = imagesMarginTop + Math.floor(i/4)*(imageWidth + Grid.getGutterWidth());
		return <image x={xcurrent} y={ycurrent} width={imageWidth} height={imageWidth} key={obj.nombre} xlinkHref={obj.foto} />;
	});
 }
 
 render() {
	//------------------Margen sup e inf     + fotos+3 (para que muestre el hueco al empezar a rellenar la fila) * (Ancho de las fotos -son cuadradas-   + ancho separación fotos)
	let posterHeight = 2*imagesMarginTop + Math.floor((this.props.posterData.areGoing.size+3)/4)*(Grid.widthOfColumns(3) + Grid.getGutterWidth()) + sponsorsHeight;
	let sponsorTop = imagesMarginTop + Math.floor((this.props.posterData.areGoing.size+3)/4)*(Grid.widthOfColumns(3) + Grid.getGutterWidth());

    return (
		<div>
			<div id="svgPreview">
				<svg width={Grid.getTotalWidth()} height={posterHeight} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
					<style>
						{stylesPrefix + svgStyles + `fill: ${this.props.posterData.frontColor};` + stylesSufix}
					</style>
					<SvgDefs gradientBegin={this.props.posterData.bgColor1} gradientEnd={this.props.posterData.bgColor2} />
					<rect x="0" y="0" height="100%" width="100%" fill="url(#bgGrad)" />		
					<text fontFamily="'LeagueGothic-Regular'" fontSize={posterTitleFontSize}  x={Grid.getMarginWidth()} y="80" id="posterTitle">{this.props.posterData.title}</text>
					
					{this.createMemberPhotos()}
					
					<SvgPatrocinadores sponsorTop={sponsorTop} infoPatrocinadores={this.props.posterData.teamData.patrocinadores} />
				</svg>
			</div>
			<div className="svgDownload">
				<a className="btn" href="#" onClick={this.descargarPoster} title="Descargar el póster">Descargar SVG</a>
			</div>
		</div>
    );
  }	
}

export default SvgPreview;