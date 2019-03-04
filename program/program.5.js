const Header = ({ someProp }) => React.createElement('div', { style: 'color: indianred;' }, [
	React.createElement('h1', null, ['Hello React! ' + someProp]),
	React.createElement('h3', null, ['This is a learning experiment in creating my own simplified version of React']),
	React.createElement('h4', null, [
		'Inspired by ',
		React.createElement('a', { href: 'https://hackernoon.com/build-your-own-react-48edb8ed350d' }, ['Ofir Dagan\'s article here']),
		'.'
	])
]);

const ContainerStyles = 'height: 100vh; width: 100vw; display: flex; flex-direction: column; align-items: center; justify-content: center;';

class Container extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: 0 };
	}

	onPlusClick() {
		console.log(this.state.value);
		this.setState({value: this.state.value + 1});
	}

	onMinusClick() {
		console.log(this.state.value);
		this.setState({value: this.state.value - 1});
	}

	render() {
		console.log(this.props);
		return React.createElement('div', { style: ContainerStyles }, [
			React.createElement('div', null, [
				React.createElement(Header, { ...this.props }),
				React.createElement('div', { style: 'display: flex; align-self: flex-start;'}, [
					React.createElement('button', { onClick: () => this.onPlusClick() }, ['+1']),
					React.createElement('div', null, ['Count: ' + this.state.value]),
					React.createElement('button', { onClick: () => this.onMinusClick() }, ['-1']),
				])
			])
		]);
	}
}

const App = React.createElement(Container, { someProp: new Date().toISOString() });

const el = document.getElementById('root');
ReactDOM.render(App, el);