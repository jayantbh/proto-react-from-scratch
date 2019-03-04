/**
 * Step 5
 * Support using "State"
 */

let rootDOMEl = null;
let rootReactEl = null;
const classMap = {};
let classIndex = 0;

class Component {
	constructor(props) {
		this.props = props;
		this.state = {};
	}

	setState(newState) {
		console.log(newState);
		this.state = { ...this.state, ...newState };
		reRender();
	}

	render() {};
}

const getNativeElement = (element, attributes) => {
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
};

const getComponentElement = (element, attributes) => {
	classIndex++;
	if (!classMap[classIndex]) {
		const el = (new element(attributes));
		classMap[classIndex] = el;
		return el;
	}
	else {
		return classMap[classIndex];
	}
};

const getElement = (element, attributes) => {
	if(typeof element === 'string') {
		return getNativeElement(element, attributes);
	} else if (element.prototype instanceof Component) {
		return getComponentElement(element, attributes);
	} else if(typeof element === 'function') {
		return element(attributes);
	}
	return element;
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
		else if (child.prototype instanceof Component) el.appendChild(createElement(child.render(), null));
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
	 * @param {Function | Component} el
	 * @param {HTMLElement} dom
	 */
	render: (el, dom) => {
		rootReactEl = el;
		rootDOMEl = dom;

		const newDomRoot = (el instanceof Component) ? el.render() : (typeof el === 'function') ? el() : el;
		dom.appendChild(newDomRoot);
	}
};

function reRender() {
	while (rootDOMEl.hasChildNodes()) {
		rootDOMEl.removeChild(rootDOMEl.lastChild);
	}
	classIndex = 1;
	ReactDOM.render(rootReactEl, rootDOMEl);
}