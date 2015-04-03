var http = require('request');

exports.post = function(url, req, callback) {
    if(typeof req !=  "string")
        req = JSON.stringify(req);

    var requestBody = {
        uri: url,
        headers: {
            Referer:'https://order.dominos.com/en/pages/order/',
            "Content-Type": 'application/json'
        },
        body: req
    };

    http.post(requestBody, function (error, res, body) {
            if (error) {
                callback({ success: false, error: error });
                return;
            }

            if (res.statusCode !== 200) {
                callback({
                    success: false,
                    error: {
                        message: 'HTML Status Code Error',
                        code: res.statusCode
                    }
                });
                return;
            }

            try {
                callback({
                    success: true,
                    result: JSON.parse(body)
                });
            }
            catch(err){
                callback({
                    success: false,
                    error: {
                        message: 'Could not parse API return',
                        err: err
                    }
                });
            }

        }
    );
}

exports.get = function(url, callback){
    var requestBody = {
        uri: url,
        headers: {
            'Referer':'https://order.dominos.com/en/pages/order/'
        }
    };
    http.get(requestBody, function (error, res, body) {
            if (error){  //If request errored out.
                callback({
                    success: false,
                    error: error
                });
                return;
            }
            if (res.statusCode !== 200){  //If request didn't error but response isn't status code 200.
                callback({
                    success: false,
                    error: {
                        message: 'HTML Status Code Error',
                        code: res.statusCode
                    }
                });
                return;
            }

            try {  //If request is successful
                callback({
                    success: true,
                    result: JSON.parse(body)
                });
            }
            catch(err) {  //If successful but parsing errored.
                callback({
                    success: false,
                    error: {
                        message: 'Could not parse API return',
                        err: err
                    }
                });
            }
        }
    );
}