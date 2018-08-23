// copied from https://www.netlify.com/docs/functions/

exports.handler = function(event, context, callback) {
	const all_the_things = JSON.stringify({
		context,
		event,
		env: process.env,
	}, null, 2)

	console.log('identity-login', all_the_things)

	callback(null, {
		statusCode: 200,
		body: 'OK',
	})
}
