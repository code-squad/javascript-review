var result = 0;

function a() {
    for (var i=0; i < arguments.length; i++) {
        result += arguments[i];
    }
    console.log(result);
}

a(1, 2, 3, 4, 5);