const App = React.createElement('div', {}, [
	React.createElement('h1', { style: 'color: red;' }, ['Hello React!'])
]);

const el = document.getElementById('root');
ReactDOM.render(App, el);