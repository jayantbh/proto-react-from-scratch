/**
 * Step 2
 * Support using "components"
 */

/**
 * React.createElement
 * @param {string | HTMLElement} element
 * @param {Object} attributes
 * @param {Array} children
 */
const createElement = (element, attributes = {}, children = []) => {
	const el = (typeof element === 'string') ? document.createElement(element) : element;
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