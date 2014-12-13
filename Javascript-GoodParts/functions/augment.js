/**
 * Function augmenting
 */
Function.prototype.method = function(name,func){
	this.prototype[name] = func;
	return this;
};
String.method('trim', function(){
	return this.replace(/^\s+|\s+$/g, '');
});
Number.method('integer',function(){
	return Math[this < 0 ? 'ceiling' : 'floor'](this);
});
var x ='   masud hasan';
console.log(x.trim());
var y =10.2365;
console.log(y.integer());





