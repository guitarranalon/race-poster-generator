import React, { Component } from 'react';
import './SvgCumbreLogo.css';

class SvgCumbreLogo extends Component {

	render(){
		return (
			<g opacity="0.2">
				<path fill={this.props.watermarkColor} d="M495.43,70.962c24.912,14.382,37.918,35.53,38.979,63.375c-3.705,13.839-8.182,25.292-13.395,34.324
					c-3.209,5.551-14.756,24.188-34.693,55.926c-9.592,16.61-30.867,60.423-63.771,131.369c55.104,34.542,109.398,67.237,162.873,98.11
					c30.934,17.859,47.188,25.504,48.705,22.863c61.404-86.805,106.568-146.976,135.576-180.459
					c24.416-13.525,48.893-13.239,73.428,0.924l6.031,3.483c24.121,13.931,36.408,34.451,36.836,61.567
					c-0.359,5.252-1.457,9.494-3.316,12.705l-2.521,4.373c-24.551,31.387-71.613,94.734-141.127,190.125
					c-10.73,12.09-21.732,20.906-32.979,26.498c-16.529,7.217-35.975,7.471-58.357,0.758c-7.664,0.244-44.854-17.52-111.547-53.299
					c-140.727-81.246-215.873-130.268-225.465-147.107c-15.697-16.455-24.558-33.634-26.534-51.533
					c-3.006-8.745,4.281-32.958,21.829-72.651c30.988-63.887,50.713-103.11,59.135-117.702c4.568-7.913,15.936-26.255,34.18-55.034
					c4.081-11.683,6.844-18.838,8.367-21.475c11.459-19.85,35.024-24.947,70.715-15.248C486.119,66.18,491.797,68.86,495.43,70.962"/>
				<path fill={this.props.watermarkColor} d="M590.295,657.342c24.494,14.145,36.459,36.615,35.865,67.373c-1.324,8.824-3.734,16.266-7.256,22.365
					c-13.473,23.348-37.217,32.373-71.148,27.141c-13.805-0.313-104.316-48.746-271.537-145.295
					c-25.559-13.316-57.257-28.492-95.118-45.604c-24.518-14.154-36.294-37.451-35.262-69.859c2.15-7.389,4.124-12.695,6.001-15.943
					l1.858-3.219c15.545-26.928,42.886-34.842,82.044-23.713c41.927,16.541,134.454,66.129,277.567,148.766
					C535.012,631.885,560.684,644.539,590.295,657.342"/>
				<path fill={this.props.watermarkColor} d="M430.627,773.811c16.884,9.748,27.695,26.771,32.429,51.033c1.249,13.637-1.356,26.012-7.782,37.141
					c-13.891,24.057-39.102,32.459-75.658,25.244c-41.504-18.201-101.996-47.15-181.47-86.811
					c-46.665-26.947-70.011-51.432-70.128-73.533c-2.452-14.338-0.355-27.236,6.279-38.727c14.509-25.125,39.938-33.9,76.304-26.322
					c7.038,2.654,11.795,4.668,14.198,6.061c22.296,14.309,34.344,22.236,36.148,23.744L430.627,773.811z"/>
			</g>		
		);
	}
}

export default SvgCumbreLogo;