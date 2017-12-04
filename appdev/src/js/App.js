var ScratchPage = require("./pages/ScratchPage")

require("../css/App.scss");

class App extends React.Component {
	constructor(props) {
		super();
	}

	render() {
		if (this.props.path == "/scratch") {
			var pageContent = <ScratchPage />;
		}

		return (
			<div className="pageContainer container">
				<div>
					<h1 className="appHeader">Hello Page!</h1>
					{ pageContent }
				</div>
			</div>
		);
	}
};

module.exports = App;