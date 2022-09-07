// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    var exp = document.getElementById("result").value;
    var ans = eval(exp);//this function evaluates the passed expression and returns the result of that expression.
    document.getElementById("result").value = ans;
}