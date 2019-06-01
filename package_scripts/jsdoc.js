const jsdoc2md = require('jsdoc-to-markdown')
const fs = require('fs');
const path = require('path'); 

const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')

const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory)


let dir = path.resolve("../packages/");
//console.log(jsdoc2md.renderSync({ files: '../packages/app-interface/*.js' }));
//console.log(jsdoc2md.renderSync({ files: '../package_scripts/*.js' }));
  console.log("Generating Documentation...");
  
  
let sidebar = (objs) => {
	let exports = "module.exports = [['guide.md', 'Guide'],\"/docs/"
      
	  exports += objs.join('","/docs/');
    exports += "\"];"
	
	return exports;
}
  
  
let generateDocs = (str,name) => {
	fs.writeFileSync('../documentation/docs/' + name + ".md", str);
}

let template = fs.readFileSync('../documentation/template.md').toString();

let collection = [];
  
getDirectories(dir).forEach((obj) => {
	let folder = obj.split("\\");
	folder = folder[folder.length - 1];
	console.log(folder);
	collection.push(folder);
	jsdoc2md.render({ files: obj + '//*.js', template: template }).then((obj) => {
		console.log(obj);
		generateDocs(obj,folder);
	});
});

console.log();


fs.writeFileSync('../documentation/sidebar.js', sidebar(collection));




