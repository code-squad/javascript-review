// 2018-09-01 객체실습 1
const firstProps = [];
const numberProps = [];

// 객체 배열화
Object.keys(widget).forEach( (key) => {
    if (typeof(widget[key]) == "string") return;
    firstProps.push(widget[key]);
});

firstProps.map((obj, index) => {
    for ( val in obj ){
        // 프로퍼티의 밸류가 'number' 인지 검증. number 타입일 경우 numberProps 배열에 push.
        if (typeof(obj[val]) == 'number' ) {
            numberProps.push(val);
        }
    }
});

console.log(numberProps);