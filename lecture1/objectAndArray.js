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


const numberKey = [];
Object.keys(widget).forEach(item => {
    if (typeof widget[item] === 'number') {
        numberKey.push(item);
    } 
    
    if (typeof widget[item] === 'object') {
		const keysInWidget = Object.keys(widget[item]);

		keysInWidget.forEach((i) => {
            if (typeof widget[item][i] === 'number') {
                numberKey.push(i);
            }	
		});
    }
});

console.log(numberKey);
