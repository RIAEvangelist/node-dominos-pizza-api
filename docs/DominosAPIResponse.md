Dominos API Response information
====

Not all responses actually follow this format, some will throw a `FetchError` because the Domino's API is inconsistant with how it handles errors. Sometimes it follows the below JSON, and other times it returns SOAP and yet others HTML Error Pages. It is best to wrap things in `try catch` if you want to have error handling for invalid requests.


Good response
====

```js

    dominosAPIResponse: {
        Status: 0
    }

```


Bad Response
====

```js

    {
        Status: -1,
        StatusItems: [ { Code: 'MissingCityRegionOrPostalCode' } ]
    }

```

Non JSON response
====

It is a shame that the API is not consistant.

```js

FetchError: invalid json response body at https://www.dominos.com/ reason: Unexpected token < in JSON at position 0
    at C:\Users\brand\git\node-dominos-pizza-api\node_modules\node-fetch\lib\index.js:272:32
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at async get (file:///~/git/node-dominos-pizza-api/utils/api-json.js:67:18)
    at async Store.#init (file:///~/git/node-dominos-pizza-api/modules/Store.js:25:19)
    at async file:///~/git/node-dominos-pizza-api/example/api-examples/dominos-store-data.js:6:13 {
  type: 'invalid-json'


```