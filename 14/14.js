console.log(mathExpr("4 + 5"))
console.log(mathExpr("4 * 6"))
console.log(mathExpr("4 * no"))

function mathExpr(exp) {
    return exp.match(/^\d+(\s*[-+*\/]\s*)\d+$/g) ? true : false;
}