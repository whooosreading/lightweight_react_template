require("./App.scss")

class App extends React.Component {
	constructor(props) {
		super();
	}

	render() {
		return (
			<div className="pageContainer container">
				<div>
					<h1>Hello Page!</h1>
				</div>
			</div>
		);
	}
};

module.exports = App;