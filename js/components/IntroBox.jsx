import React, { Component, PropTypes } from 'react'



export class IntroBox extends Component {

	_updatePosition(selector) {
		let referenceTag = document.querySelector( selector );
		this._popper = new Popper(
			referenceTag,
			this.refs.infobox,
			{
				placement: 'right',
				boundariesElement: document.querySelector("body"),
				gpuAcceleration: false
				// offset: -30
			}
		);
	}

	componentDidMount() {
		this._updatePosition( this.props.selector );
	}

	componentDidUpdate(prevProps, prevState) {
		this._updatePosition( this.props.selector );
	}

	render() {
		return (
			<div ref="infobox" className="ig-infobox">
				<h3>{this.props.title}</h3>
				<section>{this.props.description}</section>
				
			</div>
		)
		// <div className="ig-nav-btn-group">
		// 			<div onClick={this.props.onPrev} className="ig-nav-btn"><i className="fa fa-caret-left" aria-hidden="true"></i> Previous</div>
		// 			<div onClick={this.props.onNext} className="ig-nav-btn">Next <i className="fa fa-caret-right" aria-hidden="true"></i></div>
		// 		</div>
		// // <button onClick={this.props.onDone} type="button" className="btn btn-default">Done</button>
	}

}