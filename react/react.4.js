/**
 * Step 4
 * Support using "Props and Event Binding"
 */



class Component {
	constructor(props) {
		this.props = props;
	}

	render() {};
}

const getElement = (element, attributes) => {
	if(typeof element === 'string') {
		element = document.createElement(element);
		for (const key in attributes) {
			if (!attributes.hasOwnProperty(key)) continue;

			if (/^on.*$/.test(key)) {
				element.addEventListener(key.substring(2).toLowerCase(), attributes[key]);
			} else {
				element.setAttribute(key, attributes[key]);
			}
		}
		return element;
	} else if (element.prototype instanceof Component) {
		return (new element(attributes)).render();
	} else if(typeof element === 'function') {
		return element(attributes);
	} else {
		return element;
	}
};

/**
 * React.createElement
 * @param {string | HTMLElement | Component | Function} element
 * @param {Object} attributes
 * @param {Array} children
 */
const createElement = (element, attributes, children = []) => {
	const el = getElement(element, attributes || {});

	for (const child of children)
		if (typeof child === 'string') el.appendChild(document.createTextNode(child));
		else el.appendChild(createElement(child, null));
	return el;
};


window.React = {
	createElement,
	Component
};

window.ReactDOM = {
	/**
	 * ReactDOM.render
	 * @param el
	 * @param {HTMLElement} dom
	 */
	render: (el, dom) => {
		dom.appendChild(el);
	}
};