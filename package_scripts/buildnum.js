const fs = require('fs');
const path = require('path');
const { generate, validate, parse, format } = require('build-number-generator')

let packagejson = fs.readFileSync('./package.json');

packagejson = JSON.parse(packagejson);

var build = 0;
let bkgBuild = packagejson.build;
try {
	console.log(build);
	if(!bkgBuild.includes("-b")) {
		console.log("test");
		throw new exception;
	}

	let obj = bkgBuild.split("-b");
	let [origDate, origBuild] = obj;
	build = parseInt(origBuild) + 1;

}
catch {
	build = 0;
	let newBuild = parseInt(bkgBuild);
	if(!isNaN(newBuild)) {
		build = newBuild;
	}
}
const buildDate = generate().substr(0,6);

const buildNumber = buildDate + "-b" + build;


packagejson.build = buildNumber;
console.log(packagejson);
console.log("New Build: " + buildNumber);


let data = JSON.stringify(packagejson, null, 4);
console.log(data);
fs.writeFileSync('../package.json', data);
