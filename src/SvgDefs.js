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
			</defs>
		);
	}
}

export default SvgDefs;