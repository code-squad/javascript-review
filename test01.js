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

const items = Object.keys(widget).map(i => widget[i]);

const numberItem = items.map(value => {
  return Object.keys(value).filter(i => {
    return toString.call(value) === '[object Object]' && toString.call(value[i]) === '[object Number]';
  });
}).filter(result => {
  return result.length > 0;
})

console.log(JSON.stringify(numberItem));
