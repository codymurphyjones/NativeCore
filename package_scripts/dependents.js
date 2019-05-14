const fs = require('fs');
const path = require('path');

let ui_fs = fs.readFileSync('./packages/app-interface/package.json'); 
let app_fs = fs.readFileSync('./packages/mobile-app/package.json');

let ui = JSON.parse(ui_fs);
let app = JSON.parse(app_fs); 


let uiDep = Object.keys(ui.dependencies);
let i = 0;
let appDep = Object.keys(app.dependencies);
uiDep.forEach((value) => {
		let inApp = appDep.includes(value);

		if(!inApp) {
			app.dependencies[value] = ui.dependencies[value];
		}
});


let data = JSON.stringify(app, null, 4);  
fs.writeFileSync('./packages/mobile-app/package.json', data); 


