import fs from 'fs';

function delay(ms=100) {
    const proceedAt = Date.now() + ms;

    //may delay a little longer than ms as the requrest to existsSync may take a few ms
    while (Date.now() < proceedAt) {
        fs.existsSync(
            Math.round(Math.random()*(ms*ms))
        );
    }

    return;
}

export { 
    delay as default, 
    delay
}; 