import React, { Component } from 'react';
import './SvgDefs.css';

class SvgDefs extends Component {

	render(){
		return (
			<defs>
				<linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%" > 
					<stop offset="0%"  style={{ stopColor: this.props.gradientBegin, stopOpacity:1}} />
					<stop offset="100%" style={{ stopColor:this.props.gradientEnd, stopOpacity:1}} />
				</linearGradient>

				<filter
				id="subtleShadow"
				width="1.5"
				height="1.5"
				x="-.25"
				y="-.25">
				<feGaussianBlur
				id="feGaussianBlur2991"
				in="SourceAlpha"
				stdDeviation="1.4"
				result="blur" />
				<feColorMatrix
				id="feColorMatrix2993"
				result="bluralpha"
				type="matrix"
				values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.25 0 " />
				<feOffset
				id="feOffset2995"
				in="bluralpha"
				dx="1"
				dy="1"
				result="offsetBlur" />
				<feMerge
				id="feMerge2997">
				<feMergeNode
				id="feMergeNode2999"
				in="offsetBlur" />
				<feMergeNode
				id="feMergeNode3001"
				in="SourceGraphic" />
				</feMerge>
				</filter>				
			</defs>
		);
	}
}

export default SvgDefs;