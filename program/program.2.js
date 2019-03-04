const Container = React.createElement('div', { style: 'height: 100vh; width: 100vw; display: flex; align-items: center; justify-content: center;' });

const App = React.createElement(Container, {}, [
	React.createElement('h1', { style: 'color: red;' }, ['Hello React!'])
]);

const el = document.getElementById('root');
ReactDOM.render(App, el);