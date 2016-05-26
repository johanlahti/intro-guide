
import React, { Component, PropTypes } from 'react'


export class CanvasWithHole extends Component {
	

	drawHole() {
		var bbox = this._createBboxFromElement( document.querySelector( this.props.selector ) )
		this._drawCanvasHole( bbox );
	}

	componentDidMount() {
		this.drawHole();
		window.addEventListener('resize', this._handleResize.bind(this));
	}
	
	/**
	 * Whenever a new bbox is sent the canvas should redraw
	 * @return {[type]} [description]
	 */
	componentDidUpdate() {
		this.drawHole();
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this._handleResize);
	}

	_handleResize() {
		this.drawHole();	
	}


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

	_drawCanvasHole(bbox) {

		var c = this.refs.myCanvas;
		var ctx = c.getContext("2d");
		ctx.clearRect (0, 0, c.width, c.height);

		var winWidth = $(window).width(),
			winHeight = $(window).height();
		if (bbox) {
			var box = [];
			if (bbox instanceof Array) {
				box = bbox;
			}
			// else if (bbox.selector) {
			// 	var padding = 15;
			// 	var selector = bbox.selector;
			// 	var $el = $(selector);
			// 	var pos = $el.offset();
			// 	var marginLeft = 0, //utils.rmPx( $el.css("margin-left") ),
			// 		marginTop = 0, //utils.rmPx( $el.css("margin-top") ),
			// 		marginRight = 0, //utils.rmPx( $el.css("margin-right") ),
			// 		marginBottom = 0; //utils.rmPx( $el.css("margin-bottom") );
			// 	box.push(pos.left + marginLeft - padding - marginRight);
			// 	box.push(pos.top + marginTop - padding  - marginBottom);
			// 	box.push( pos.left + $el.width() + marginLeft + padding - marginRight);
			// 	box.push( pos.top + $el.height() + marginTop + padding - marginRight);
			// }

			var left = box[0],
				top = box[1],
				right = box[2],
				bottom = box[3];
		}
		
		c.width = winWidth;
		c.height = winHeight;

		// ctx.fillRect(0,0,winWidth,winHeight);

		ctx.moveTo(0, 0);
		ctx.lineTo(winWidth, 0);
		ctx.lineTo(winWidth, winHeight);
		ctx.lineTo(0, winHeight);
		ctx.lineTo(0, 0);
		ctx.closePath();

		if (bbox) {
			ctx.moveTo(left, top);
			ctx.lineTo(left, bottom);
			ctx.lineTo(right, bottom);
			ctx.lineTo(right, top);
			ctx.lineTo(left, top);
			ctx.closePath();
		}

		ctx.fillStyle = "rgba(0,0,0,0.5)";
		ctx.shadowColor = 'rgba(0,0,0,1)';
		ctx.shadowBlur = 20;
		
		ctx.fill();
		
	}

	render() {
		return (
			<canvas ref="myCanvas" className="ig-canvas-with-hole" />
		)
	}

}