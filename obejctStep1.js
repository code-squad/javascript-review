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
}

const numbersArr = [];
var extractNumber = (obj) => {
    if(obj == null) return;
    
    Object.keys(obj).forEach((key) => {
        if(toString.call(obj[key]) === '[object Number]') numbersArr.push(obj[key]);
        else if(toString.call(obj[key]) === '[object Object]') extractNumber(obj[key]);
    });
    return numbersArr;
};

const numberArr = extractNumber(widget);
console.log(numberArr);