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
const resultArray = [];
Object.keys(widget).forEach(function(key) {
    if(typeof widget[key] == 'object') {
        const sub = widget[key];
        Object.keys(sub).forEach(function(key) {
            if(typeof sub[key] == 'number') {
                resultArray.push(sub[key]);
            }
        });
    }
    if(typeof widget[key] == 'number') resultArray.push(widget[key]);
});
console.log(resultArray);
