const transpileDeps = [];
const transpileNestedDeps = [];
const noTranspile = [];

var ntpjson = require('./transpile.json')
var packagejson = require('./package.json')

function AddTranspile(item) {
			if(!transpileDeps.includes(item)) {
					transpileDeps.push(item);	
			}
}

Object.keys(ntpjson.transpile).forEach(function (item) {
			AddTranspile(ntpjson.transpile[item]);	
	});

Object.keys(packagejson.dependencies).forEach(function (item) {
	
	if(!ntpjson.noTranspile.includes(item)) {
		AddTranspile(item);	
	}
});


module.exports = transpileDeps;
