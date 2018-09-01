// 2018-09-01 객체실습 1
const firstProps = [];
const numberProps = [];

Object.keys(widget).forEach( (key) => {
    if (typeof(widget[key]) == "string") return;
    firstProps.push(widget[key]);
});

firstProps.map((obj, index) => {
    for ( val in obj ){
        if (typeof(obj[val]) == 'number' ) {
            numberProps.push(val);
        }
    }
});

console.log(numberProps);