const fs = require('fs');
const path = require('path');
//Load package.json from both modules
let ui_fs = fs.readFileSync(path.resolve('./packages/app-interface/package.json'));
let app_fs = fs.readFileSync(path.resolve('./packages/mobile-app/package.json'));

let ui = JSON.parse(ui_fs);
let app = JSON.parse(app_fs);

delete app.dependencies["app-interface"];

let uiDep = Object.keys(ui.dependencies);
let appDep = Object.keys(app.dependencies);




//console.log(uiDep);
//Check to ensure that mobile-app has all of app-interface's dependencies
uiDep.forEach((value) => {
    let inApp = appDep.includes(value);
	
    if (!inApp && value != "app-interface") {
		//Add missing dependencies
        app.dependencies[value] = ui.dependencies[value];
    }
});


let data = JSON.stringify(app, null, 4);
fs.writeFileSync(path.resolve('./packages/mobile-app/package.json'), data);
