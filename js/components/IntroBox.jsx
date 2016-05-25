import React, { Component, PropTypes } from 'react'



export class IntroBox extends Component {

	componentDidMount() {
		console.log(Popper);
		var popper = new Popper( React.findDOMNode( this.refs.infobox ), function() {alert("hej")}, {
			placement: 'right',
			boundariesElement: React.findDOMNode( document.querySelector("body") ),
			gpuAcceleration: false
		});

	}

	render() {
		return (
			<div ref="infobox" className="ig-infobox">
				<h3>{this.props.title}</h3>
				<section>{this.props.description}</section>
				<div className="btn-group" role="group" aria-label="...">
					<button onClick={this.props.onPrev} type="button" className="btn btn-default">Previous</button>
					<button onClick={this.props.onNext} type="button" className="btn btn-default">Next</button>
				</div>
			</div>
		)
		// // <button onClick={this.props.onDone} type="button" className="btn btn-default">Done</button>
	}

}