



class InfoBox extends Component {
	
	render() {
		return (
			<div>
				<h3>{this.props.title}</h3>
				<section>{this.props.description}</section>
			</div>
		)
	}

}