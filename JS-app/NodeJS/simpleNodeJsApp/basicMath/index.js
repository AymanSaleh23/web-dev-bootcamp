add = function (num1, num2) { return num1 + num2 };
sub = function (num1, num2) { return num1 - num2 };
mul = function (num1, num2 = 1) { return num1 * num2 };
exp = function (num1, num2 = 2) { return num1 ** num2 };
sqr = function (num1) { return exp(num1) };
cube = function (num1) { return mul(num1, sqr(num1)) };
div = function (num1, num2 = 1) {
    if (num2 !== 0) {
        return num1 / num2
    }
    else
        return 'undefined';
}
mod = function (num1, num2 = 1) {
    if (num2 !== 0) {
        return num1 % num2
    }
    else
        return 'undefined';
}


module.exports.add = add;
module.exports.sub = sub;
module.exports.mul = mul;
module.exports.exp = exp;
module.exports.sqr = sqr;
module.exports.cube = cube;
module.exports.div = div;
module.exports.mod = mod;

