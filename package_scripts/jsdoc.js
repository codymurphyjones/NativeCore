
const jsdoc2md = require('jsdoc-to-markdown')
const fs = require('fs');
const path = require('path'); 
const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')
console.log(path.resolve('./documentation/template.hbs'));

var template = fs.readFileSync('./documentation/template.hbs', 'utf8').toString();
var [templateStart, templateEnd] = template.split("{{>main}}");

template = `${templateStart} {{>main}} ${templateEnd}`


const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory)


let dir = path.resolve("./packages/");
  console.log("Generating Documentation...");
  
  
let sidebar = (objs) => {
	let exports = "module.exports = [['guide.md', 'Guide'],\"/docs/"
      
	  exports += objs.join('","/docs/');
    exports += "\"];"
	
	return exports;
}
  
  
let generateDocs = (str,name) => {
	let folder = path.resolve('./documentation/docs') + "\\";
	fs.writeFileSync(folder + name + ".md", str);
}

let collection = [];
  
getDirectories(dir).forEach((obj) => {
	let folder = obj.split("\\");
	folder = folder[folder.length - 1];
	collection.push(folder);
	try {
		var options = { files: obj + '//*.js', template: template };
		//jsdoc2md.getTemplateDataSync(options)
		let markdown = jsdoc2md.renderSync(options);
	
		generateDocs(markdown,folder);
	}
	catch(e) {
		console.log(e);
	}
});



fs.writeFileSync('./documentation/docs/sidebar.js', sidebar(collection));




