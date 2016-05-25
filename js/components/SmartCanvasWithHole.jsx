

import React, { Component, PropTypes } from 'react'
import { CanvasWithHole } from '../components/CanvasWithHole.jsx'


export class SmartCanvasWithHole extends Component {
	
	_createBboxFromElement(tag) {
		var padding = 20;
		var h = tag.clientHeight,
			w = tag.clientWidth,
			left = tag.offsetLeft,
			top = tag.offsetTop;
		return [
			left - padding,
			top - padding,
			left + w + padding,
			top + h + padding
		];

	}
	
	render() {
		var bbox = this._createBboxFromElement( document.querySelector( this.props.selector ) )
		return (
			<CanvasWithHole bbox={bbox} />
		)
	}

}