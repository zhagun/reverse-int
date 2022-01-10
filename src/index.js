module.exports = function reverse (n) {
  var arr = (""+Math.abs(n)).split('').reverse();
  return +arr.map(Number).join("");
}
