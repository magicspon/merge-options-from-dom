# merge-options-from-dom

Tiny utility for merging JSO from a data-attribute, and internal objects. 


### HTML

```
<div id="item" data-options='{"title": "Gary"}'></div>

```

### JS

```
import mergeOptions from 'merge-options-from-dom'


class Example {
	defaults = {
		title: 'Wayne',
		size: 'big',
		init: true
	}
	
	constructor(el, options = {}) {
		this.options = mergeOptions(this.defaults, options, el, 'options')
	
	}
}

const a = new Example(document.getElementById('item'), {
	init: false
})

/* result */
a.options === {
	title: 'Gary',
	size: 'big',
	init: false
}

```