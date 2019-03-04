class Container extends React.Component {
	render() {
		return React.createElement('div', { style: 'height: 100vh; width: 100vw; display: flex; align-items: center; justify-content: center;' });
	}
}

const Header = () => React.createElement('h1', { style: 'color: red;' }, ['Hello React!']);

const App = React.createElement(Container, {}, [Header]);

const el = document.getElementById('root');
ReactDOM.render(App, el);