import fetch from 'node-fetch';
import urls from './urls.js';

const post=async function(url, payload, headers={}) {
    const options = {
        method:'POST',
        headers: {
            'Referer': urls.referer,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...headers
        },
        body:payload
    };

    //console.log(options,url);

    const res=await fetch(
        url,
        options
    );

    //console.log(await res.text());

    return await res.json();
}

const get = async function(url, headers={}){
    const options = {
        method:'GET',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            ...headers
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

const getTracking = async function(url,market='UNITED_STATES'){
    const options = {
        "headers": {
            "accept": "application/json",
            "content-type": "application/json; charset=utf-8",
            "dpz-language": "en",
            "dpz-market": "UNITED_STATES"
          },
          "method": "GET"
    };

    //console.log(options,url);

    const res=await fetch(
        url,
        options
    );

    return await res.json();
}

const old={get,getTracking,post}

export {
    old as default,
    get,
    getTracking,
    post
}