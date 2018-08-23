// see https://www.netlify.com/docs/functions/

exports.handler = function(event, context, callback) {

	throw new Error('TEST ERROR 1!')

	/*callback(
		new Error('TEST ERROR 2!'),
		{
			statusCode: 567,
		}
	)*/
}
