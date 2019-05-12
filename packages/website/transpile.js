
const transpileDeps = [];
const transpileNestedDeps = [];
const noTranspile = [];

//NoTranspileJson
var ntpjson = require('./transpile.json')
var packagejson = require('./package.json')
console.log(ntpjson);
function AddTranspile(item) {
			//console.log(item);
			if(!transpileDeps.includes(item)) {
					transpileDeps.push(item);	
			}
}
console.log("NTPJson");
Object.keys(ntpjson.transpile).forEach(function (item) {
			AddTranspile(ntpjson.transpile[item]);	
	});
console.log("");
console.log("packagejson");
Object.keys(packagejson.dependencies).forEach(function (item) {
	
	if(!ntpjson.noTranspile.includes(item)) {
		AddTranspile(item);	
	}
});
console.log("");
console.log(transpileDeps);
module.exports = transpileDeps;
