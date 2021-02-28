# Global DominosErrors

These custom errors are added to the global object for use in your code and the `dominos` api. You can use them to validate errors or even throw your own if you are making a module ontop of this one.

|error                  |parameters         |description|
|-----                  |----------         |-----------|
|DominosValidationError |validationResponse |this error is thrown when a dominos validation request fails|



```js

throw new DominosValidationError(order.validationResponse);


```