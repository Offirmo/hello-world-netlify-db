// copied from https://www.netlify.com/docs/functions/

exports.handler = function(event, context, callback) {

	console.log('hello')
	console.info('hello')
	console.warn('hello')
	console.error('hello')

	callback(null, {
		statusCode: 200,
		body: "Hello, World"
	})
}
