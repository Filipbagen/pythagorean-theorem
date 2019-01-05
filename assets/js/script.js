function getCathetusA() {
    var b = 4;
    var c = 5;
    var a = Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2));

    document.getElementById("calcA").innerHTML = "The cathetus is " + Math.round(a * 100) / 100 + " units of lenght!";
}

function getCathetusB() {
    var a = 3;
    var c = 5;
    var b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));

    document.getElementById("calcB").innerHTML = "The cathetus is " + Math.round(b * 100) / 100 + " units of lenght!";
}

function getHypotenuse() {
    var a = 3;
    var b = 4;
    var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

    document.getElementById('calcC').innerHTML = 'The hypotenuses is ' + Math.round(c * 100) / 100 + ' units of length!'
}

function getTriangle(a, b) {
    const result = Math.sqrt(Math.pow(a, 2) - Math.pow(b, 2))
    return result
}


