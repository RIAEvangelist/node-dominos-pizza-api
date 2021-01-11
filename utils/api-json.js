import fetch from 'node-fetch';
import urls from './urls.js';

const post=function(url, req, callback) {
    if(typeof req !=  'string')
        req = JSON.stringify(req);

    const requestBody = {
        uri: url,
        headers: {
            Referer: urls.referer,
            'Content-Type': 'application/json'
        },
        body: req
    };

    http.post(requestBody, function (error, res, body) {
      if (error) {
          return callback({
            success: false,
            message: error
          });
      }

      if (res.statusCode !== 200) {
          return callback({
              success: false,
              message: 'HTML Status Code Error ' + res.statusCode
          });
      }

      try {
          const parsed = JSON.parse(body);
      }
      catch(error){
        console.log(error);
        return callback({
            success: false,
            message: error
        });
      }

      return callback({
          success: true,
          result: parsed
      });
  });
}

const get = async function(url){
    const options = {
        method:'GET',
        headers: {
            'Referer': urls.referer
        }
    };

    //console.log(options,url);

    const res=await fetch(
        url,
        options
    );

    //console.log(await res.text());

    const parsed=await res.json();

    return parsed;
}

const old={get,post}

export {
    old as default,
    get,
    post
}