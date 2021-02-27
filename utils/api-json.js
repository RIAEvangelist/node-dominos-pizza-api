import fetch from 'node-fetch';
import urls from './urls.js';
import {default as parser} from 'xml2json';

const post=async function(url, payload) {
    const options = {
        method:'POST',
        headers: {
            'Referer': urls.referer,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
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