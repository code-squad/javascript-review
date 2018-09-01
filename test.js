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
const extractNumberKey = () => {
  const array = [];
  const keys = Object.keys(widget);
  keys.forEach((key) => {
    if (typeof(widget[key] === 'object')) {
      Object.keys(widget[key]).forEach((subKey) => {
        if (typeof(widget[key][subKey]) === 'number') {
          array.push(subKey);
        }
      })
    } else if (typeof(widget[key] === 'number')) {
      array.push(widget[key]);
    } 
  });
  return array
} 
  
console.log('extractNumberKey():', extractNumberKey());

// const keys = Object.keys(widget);
// keys.forEach((key) => {
//   console.log('key:', key);
// })