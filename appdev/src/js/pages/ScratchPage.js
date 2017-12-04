var fetch = require('node-fetch');
var Spinner = require("react-spinner");

class ScratchPage extends React.Component {
	constructor(props) {
		super();
		this.state = { data: null }
	}

	render() {
		if (this.state.data === null) {
			var list = (
				<Spinner />
			);
		} else {
			var items = _.map(this.state.data, (book) => {
				return (
					<li>{ book.title }</li>
				);
			});
			var list = (
				<ol>{ items }</ol>
			);
		}
		return (
			<div className="ScratchPage">
				<p>Scratch Page</p>
				{ list }
			</div>
		);
	}

	componentDidMountAAAA() {
		fetch("http://matilda.whooosreading.org/api/v1/search?q=harry+potter")
		.then((response) => {
			return response.json();
		}).then((data) => {
			this.setState({ data: data.results });
		});
	}
};

module.exports = ScratchPage;