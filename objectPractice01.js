const widget = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
};

Object.prototype.key = (obj) => {
    if(obj === null 
        || typeof obj !== 'object') {
        return obj;
    }

    return Object.keys(obj)[0].toString();
}

const isEmpty = (value) => {
    return value === null || value === undefined;
}

let arrs = Object.keys(widget).reduce( (keys, key) => {
    const value = widget[key];

    if(isEmpty(value)) {
        return keys;
    }

    if(typeof value === 'number') {
        return keys.concat(key);
    }

    if(typeof value === 'object') {
        return keys.concat(Object.keys(widget[key]).filter( (subKey) => {
            return typeof widget[key][subKey] === 'number';
        }));
    }

    return keys;
}, []);

console.log('keys is ', arrs);