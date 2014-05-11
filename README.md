# ajax-only

Express middleware for only accept AJAX request for a given URL

## Usage

```js
	var ajaxOnly = require('ajax-only');
	app.use(ajaxOnly([options]));
```

## Options

* `redirect`:  URL to where the user will be redirected if using a non-AJAX request (default: false)
* `status`: If not using redirect, send a response with this status (default: 404)
* `body`: If not using redirect, send a response with this body (default: 'Not found' or the http.STATUS_CODE for the given status)