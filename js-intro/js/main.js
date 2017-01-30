console.log('Hello World');
console.log('25 + 10 =', 25+10);
console.log('25 - 10 =', 25-10);
console.log('25 * 10 =', 25*10);
console.log('25 / 10 =', 25/10);
console.log('Hello' + ' ' + 'World');

var a; // comment
/*
 * comment 
 */
a = 'hi';
console.log('a = ', a);
a = 3.5;
console.log('a = ', a);

var arr = [1, 'a', 5.6];
console.log('arr =', arr);
console.log('arr.length =', arr.length);
arr.push(['hello', 'world']);
console.log('arr =', arr);
console.log('arr.length =', arr.length);
console.log('arr[3].length =', arr[3].length);

console.log('Hello World'.length);

var obj = {
    'key1' : 'value1',
    'key2' : 3.5,
    'arr' : arr
};// camelCase
console.log('obj =', obj);
console.log('obj.key1 =', obj.key1);
console.log('obj.key2 =', obj['key2']);
console.log('obj.arr[1] =', obj.arr[1]);
console.log('obj.arr[2] =', obj['arr'][2]);
console.log('obj.arr[3][1].length =', obj.arr[3][1], obj.arr[3][1].length);

function fun1(param1, param2) {
    // Test function
    console.log('param1 =', param1);
    console.log('param2 =', param2);
    return [param1, param2];
}
console.log('fun1 =', fun1);
var res = fun1('a', 'b');
console.log('res = ', res);
console.log('res.length = ', res.length);
console.log(fun1(2, 5.3).length);

var sum = function(n1, n2, n3) {
    // Returns sum of three numbers
    if(n1 === undefined || n2 === undefined || n3 === undefined) {
        throw 'You\'re missing a parameter';
        return false;
    }
    return n1 + n2 + n3;
};
try {
    console.log('sum(1, -1) = ' + sum(1, -1));
} catch(err) {
    console.warn('An error was thrown: ', err);
}

var sumAll = function() {
    // Returns the sum of all the parameters of the function
    console.log('Parameters = ', arguments);
    var sum = 0;
    for(var i = 0; i < arguments.length; i++) {
        console.log('arguments[i]', i, arguments[i], sum);
        if(isNaN(arguments[i])) {
            console.warn('The parameter at '+i+' is not a number');
            continue;
        }
        sum += parseFloat(arguments[i]); // parseInt(1, 10);
    }
    return sum;
};
console.log('sumAll(1,2,3,5,-2,\'a\',3.6,\'9\',-9) =', sumAll(1,2,3,5,-2,'a', 3.6, '9', -9));
var sumResult = document.getElementById('sumResult');
console.log('sumResult =', sumResult);
sumResult.innerHTML = 'Comming Soon!';
sumResult.innerHTML = '<b>'+sumAll(1,2,3)+'</b>';
document.body.style.backgroundColor = 'black';
document.body.style.color = 'ivory';

function updateColor() {
    var selectedColor = document.getElementById('backgroundColorPicker').value;
    document.body.style.backgroundColor = selectedColor;
}