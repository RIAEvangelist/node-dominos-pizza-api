import {Image} from '../index.js';

const productCode='S_PIZPX';
const savePath='./';

const pepperoniPizza=await new Image(productCode);

const shortBase64=`${pepperoniPizza.base64Image.slice(0,50)} ... ${pepperoniPizza.base64Image.slice(-50)}`

//you could pass this to a user via sms, web socket, http, tcp, make an ascii art for the terminal, OR save it to disk or a database
//here we just save it to disk as an example.
pepperoniPizza.saveSync(pepperoniPizza.base64Image,savePath,productCode+'.jpg');

console.log(`
saved ./${productCode}.jpg
image.base64Image=
`);

console.dir(shortBase64);