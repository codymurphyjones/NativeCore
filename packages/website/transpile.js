
const transpileDeps = [];
const noTranspile = [];


//NoTranspileJson
var ntpjson = require('./.notranspile.json')
var packagejson = require('./package.json')

Object.keys(ntpjson.noTranspile).forEach(function (item) {
			noTranspile.push(ntpjson.noTranspile[item]);
		
	});


function AddTranspile(item) {
			if(!noTranspile.includes(item))
					transpileDeps.push(item + "");	
}
	
Object.keys(packagejson.dependencies).forEach(function (item) {
			AddTranspile(item);	
		});
		
/*Object.keys(appjson.dependencies).forEach(function (item) {
			if(!noTranspile.includes(item))
					transpileDeps.push(item + "");	
		});*/
		//dependencies

let arrayClone = transpileDeps;

arrayClone.forEach((item) => {
	let obj = require(item + '/package.json')
	
	Object.keys(obj.dependencies).forEach(function (item) {
		AddTranspile(item);
	
	});
});

 console.log("Final Output");
 console.log("");
 console.log(transpileDeps);
 module.exports = transpileDeps;
