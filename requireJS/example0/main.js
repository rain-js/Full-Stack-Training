requirejs.config({
	baseUrl: 'lib',
	paths: {
		// the left side is the module ID,
		// the right side is the path to
		// the jQuery file, relative to baseUrl.
		// Also, the path should NOT include
		// the '.js' file extension.
		jquery: 'jquery-3.3.1'
	}
});

require(['jquery'], function($) {
	console.log($)
	console.log($('#message').text())
})