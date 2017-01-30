function calculate() {
    // Take values from the input
    var param1 = parseFloat(document.getElementById('inputParam1').value),
        param2 = parseFloat(document.getElementById('inputParam2').value),
        operator = document.getElementById('operatorParam').value,
        result = 0;
    // Use a switch-case or an if-else ladder to perform the right action based on the operator
    switch(operator) {
        case '+':
            result = param1 + param2;
            break;
        case '-':
            result = param1 - param2;
            break;
        case '*':
            result = param1 * param2;
            break;
        case '/':
            result = param1 / param2;
            break;
    }
    // Populate the result input with the calulated value
    document.getElementById('resultBox').value = result;
}