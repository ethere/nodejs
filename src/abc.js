console.log('module ./src/abc')

console.log(this === module.exports,this === exports);

exports.c = 3;

module.exports.a = 1;

module.exports.b = 2;

this.d = 4;