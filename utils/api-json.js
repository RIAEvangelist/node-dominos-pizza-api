import fetch from 'node-fetch';
import urls from './urls.js';
import {default as parser} from 'xml2json';

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
            'Referer': urls.referer,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    //console.log(options,url);

    const res=await fetch(
        url,
        options
    );

    //console.log(await res.text());

    return await res.json();
}

const getSoap = async function(url){
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

    return parser.toJson(
        await res.text(),
        {
            coerce: false,
            sanitize: false,
            object: true,
            trim: false
        }
    );
}

const old={get,getSoap,post}

export {
    old as default,
    get,
    getSoap,
    post
}