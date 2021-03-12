# Global DominosErrors

These custom errors are added to the global object for use in your code and the `dominos` api. You can use them to validate errors or even throw your own if you are making a module ontop of this one.

|error                  |parameters         |description|
|-----                  |----------         |-----------|
|DominosValidationError |`.validationResponse`|this error is thrown when a dominos validation request fails|
|DominosPriceError      |`.priceResponse`     |this error is thrown when a dominos price request fails|
|DominosPlaceOrderError |`.placeOrderResponse`|this error is thrown when a dominos place request fails|
|DominosTrackingError   |message string       |this error is thrown when no trackable orders are found for a phone number|
|DominosAddressError    |message string       |this error is thrown when an issue is detected with a dominos address|
|DominosDateError       |message string       |this error is thrown when an issue is detected with a date being used for a dominos order|
|DominosStoreError      |message string       |this error is thrown when an issue is detected with a store being used for a dominos order|
|DominosProductsError   |message string       |this error is thrown when an issue is detected with an orders product list|


```js

throw new DominosValidationError(order.validationResponse);

throw new DominosPriceError(order.priceResponse);

throw new DominosPlaceOrderError(order.placeResponse);

throw new DominosTrackingError('No orders found for this phone number.');

throw new DominosAddressError('before you place an order, you must insure `order.address.region` is set');

throw new DominosDateError('Order dates must be in the future.');

throw new DominosStoreError('`order.storeID` must be specified before placing order.');

throw new DominosProductsError('`order.products` must contain atleast one item before placing order.');


```