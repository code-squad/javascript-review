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
    let numbers =[];
    for( let prop in widget) {
        let target = widget[ prop];

        if( toString.call( target) === "[object Object]"){
            for( let prop2 in target) {
                if( toString.call( target[prop2]) === "[object Number]") numbers.push( prop2);
            }
        }else if( toString.call( target) === "[object Number]") numbers.push( prop2);

    }
    
    console.log( numbers);
    