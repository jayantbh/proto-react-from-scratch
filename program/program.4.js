const Header = ({ someProp }) => React.createElement('h1', { style: 'color: red;' }, ['Hello React! ' + someProp]);

const ContainerStyles = 'height: 100vh; width: 100vw; display: flex; flex-direction: column; align-items: center; justify-content: center;';

class Container extends React.Component {
	render() {
		console.log(this.props);
		return React.createElement('div', { style: ContainerStyles }, [
			React.createElement(Header, { ...this.props })
		]);
	}
}

const App = React.createElement(Container, { someProp: 'someVal' }, [
	React.createElement('button', { onClick: () => console.log('CLICKED!') }, 'CLICK ME')
]);

const el = document.getElementById('root');
ReactDOM.render(App, el);