# ajax-only

Express middleware for only accept AJAX request for a given URL

## Example

```js
	var ajaxOnly = require('ajax-only');
	app.get('/api/*', ajaxOnly([options]));
	app.get('/api/', api.index);
```

## Options

* `redirect`:  URL to where the user will be redirected if using a non-AJAX request (default: false)
* `status`: If using redirect, redirect it with this status. Otherwise, send a response with this status (default: 302 for `redirect`, 404 for `body`)
* `body`: If not using redirect, send a response with this body (default: 'Not found' or the http.STATUS_CODE for the given status)
