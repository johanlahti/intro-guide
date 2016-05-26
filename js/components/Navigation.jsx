import React, { Component, PropTypes } from 'react'



export class Navigation extends Component {

	render() {
		return (
			<div className="ig-nav-container">
				<div className="ig-nav">
					<div className="ig-nav-btn-group">
						<div onClick={this.props.onPrev} className="ig-nav-btn"><i className="fa fa-chevron-left" aria-hidden="true"></i> Previous</div>
						<div onClick={this.props.onNext} className="ig-nav-btn">Next <i className="fa fa-chevron-right" aria-hidden="true"></i></div>
					</div>
				</div>
			</div>
		)
	}

}