var http = require('http');

module.exports = function ajaxOnly(options) {
	options = options || {};

	options.redirect = options.redirect || false;
	options.status = options.status || (options.redirect ? 302 : 404);
	options.body = options.body || http.STATUS_CODES[options.status];

	return function ajaxOnlyMiddleware(req, res, next) {
		if(req.xhr) {
		  next();
		}
		else {
			if(options.redirect) {
				res.redirect(options.status, options.redirect);
			}
			else {
				res.send(options.status, options.body);
			}
		}
	};
};