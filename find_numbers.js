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

function get_number_keys(o) {
  const keys = Object.keys(o);

  const obj_keys = keys.filter(k => typeof(o[k]) === "object");
  const num_keys = keys.filter(k => typeof(o[k]) === "number");

  return obj_keys.reduce(
    (acc, newbie) => acc.concat(get_number_keys(o[newbie])),
      num_keys);
}

console.log('It works!');
console.log(get_number_keys(widget));
