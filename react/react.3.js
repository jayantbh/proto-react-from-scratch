/**
 * Step 3
 * Support using "Class and function components"
 */



class Component {
	render() {};
}

/**
 * React.createElement
 * @param {string | HTMLElement | Component | Function} element
 * @param {Object} attributes
 * @param {Array} children
 */
const createElement = (element, attributes = {}, children = []) => {
	let el;
	if(typeof element === 'string') {
		el = document.createElement(element);
	} else if (element.prototype instanceof Component) {
		el = element.prototype.render();
	} else if(typeof element === 'function') {
		el = element();
	} else {
		el = element;
	}
	for (const key in attributes) el.setAttribute(key, attributes[key]);
	for (const child of children)
		if (typeof child === 'string') el.appendChild(document.createTextNode(child));
		else el.appendChild(createElement(child));
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