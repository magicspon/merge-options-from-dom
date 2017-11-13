export default function mergeOptionsFromElement(
	defaults = {},
	instance = {},
	el = document.body,
	name = 'options'
) {
	// create options object, merge opts from params
	let options = {
		...defaults,
		...instance
	}
	// try and merge any json options from the dom
	try {
		const o = el.dataset[name]
		const json = typeof o === 'string' ? JSON.parse(o) : {}
		options = {
			...options,
			...json
		}
	} catch (err) {
		throw new Error(
			`Error reading JSON from data attribute data-${name} on:`,
			el
		)
	}
	return options
}
