
const jsdoc2md = require('jsdoc-to-markdown')
const fs = require('fs');
const path = require('path'); 
const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')

/*var template = fs.readFileSync('./documentation/template.hbs', 'utf8').toString();
var [templateStart, templateEnd] = template.split("{{>main}}");

template = `${templateStart} {{>main}} ${templateEnd}`*/


const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory)

let dir_string = "./packages/";
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

let generateMarkdown = (folder) => {
	let file = path.resolve(folder);
	
	try {
		var options = { files: file + '\\*.js'};
		console.log(options);
		let markdown = jsdoc2md.renderSync(options);
		console.log(markdown);
		return markdown;
	}
	catch(e) {
		//console.log(e);
		console.log("Error Caught");
	}
	
	return "";
}

let collection = [];
  
getDirectories(dir).forEach((obj) => {
	let folder = obj.split("\\");
	folder = folder[folder.length - 1];
	console.log("test");
	collection.push(folder);
	let foldermarkdown = "";
	
	getDirectories(dir_string + folder).forEach((obj) => {
		console.log(obj);
		foldermarkdown += "\n";
		foldermarkdown += generateMarkdown(obj);
		console.log(foldermarkdown);
	});
	foldermarkdown += "\n";
	foldermarkdown = generateMarkdown(dir_string + folder) + foldermarkdown;
	
	generateDocs(foldermarkdown,folder);
	
});



fs.writeFileSync('./documentation/docs/sidebar.js', sidebar(collection));




