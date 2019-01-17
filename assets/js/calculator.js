function getNumber(element) {
    const res = parseInt(element.value)
    return res
}

function ending(number) {
    const string = Math.round(number * 100) / 100 + ' units of lenght!'
    return string
}

function calculate() {
    const aElement = document.querySelector('#A')
    const bElement = document.querySelector('#B')
    const cElement = document.querySelector('#C')
    const resultElement = document.querySelector('#result')

    const a = getNumber(aElement)
    const b = getNumber(bElement)
    const c = getNumber(cElement)

    if (a && b && c) {
        prompt('You have to leave one input blank!')
    } else if (a && b) {
        const res = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
        resultElement.innerHTML = 'The hypotenuse is ' + ending(res)
    } else if (b && c) {
        const res = Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2))
        resultElement.innerHTML = 'The cathetus is ' + ending(res)
    } else if (c && a) {
        const res = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2))
        resultElement.innerHTML = 'The cathetus is ' + ending(res)
    }
}