/**
 * Step 1
 * Create a basic DOM tree
 */

/**
 * React.createElement
 * @param {string} element
 * @param {Object} attributes
 * @param {Array} children
 */
const createElement = (element, attributes = {}, children = []) => {
	const el = document.createElement(element);
	for (const key in attributes) el.setAttribute(key, attributes[key]);
	for (const child of children)
		if (typeof child === 'string') el.appendChild(document.createTextNode(child));
		else el.appendChild(child);
	return el;
};


window.React = {
	createElement
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