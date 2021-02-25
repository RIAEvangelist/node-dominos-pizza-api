Image
===
The Image class will grab the image for a product code and base 64 encode it. It extends the [`js-base64-file` class](https://github.com/RIAEvangelist/js-base64-file).

![Pizza image](https://cache.dominos.com/olo/6_47_2/assets/build/market/US/_en/images/img/products/larges/S_PIZPX.jpg)

If you have cloned this repo, you can run the example with this command:
`node ./example/image.js`

Constructor
====

```js
new Image('S_PIZPX')
```

|params     |type  |required|description|
|--------   |------|--------|-------|
|productCode|string|yes     |product code from the menu|

Instance
====

This extends the [`js-base64-file` class](https://github.com/RIAEvangelist/js-base64-file). See its documentation for the inherited class members and methods.

|member/method  |type  |description|
|-------------  |------|-------    |
|base64Image    |string|base64 encoded dominos image|

```js

import {Image} from 'dominos';

const productCode='S_PIZPX';
const savePath='./';

const pepperoniPizza=await new Image(productCode);
console.log(pepperoniPizza.base64Image);

//you could pass this to a user via sms, web socket, http, tcp, make an ascii art for the terminal, OR save it to disk or a database
//here we just save it to disk as an example.
//this is part of the js-base64-file class refrence, there is a link at the top of this file
pepperoniPizza.saveSync(pepperoniPizza.base64Image,savePath,productCode+'.jpg');


```

