let expression = '';
let lastResult = 0;

function appendCharacter(char) {
    if (char === '√') {
        expression += `Math.sqrt(`;
    } else {
        expression += char;
    }
    document.getElementById('expression').value = expression;
}

function deleteCharacter() {
    expression = expression.slice(0, -1);
    document.getElementById('expression').value = expression;
}

function clearDisplay() {
    expression = '';
    document.getElementById('expression').value = '';
    document.getElementById('result').textContent = 0;
}

function calculate() {
    try {
        lastResult = eval(expression.replace('√', 'Math.sqrt'));
        document.getElementById('result').textContent = lastResult;
    } catch (error) {
        document.getElementById('result').textContent = 'Error';
    }
    expression = '';
}

function answer() {
    expression += lastResult;
    document.getElementById('expression').value = expression;
}

function toggleSign() {
    if (expression.startsWith('-')) {
        expression = expression.slice(1);
    } else {
        expression = '-' + expression;
    }
    document.getElementById('expression').value = expression;
}
