/**
 * Goal: 숫자타입으로만 구성된 요소를 뽑아 배열만들기
 */

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

const target = [];
Object.keys(widget).forEach((key) => {
    if(!isNaN(widget[key])) {
        target.push(key);
    }else if(toString.call(widget[key]) === '[object Object]') {
        let sub = widget[key];
        Object.keys(sub).forEach((k) => {
            if(!isNaN(sub[k])) {
                target.push(k);
            }
        });
    }
});
console.log(target);
