//let arg = process.argv.slice(2);
const path = require("path");
const copydir = require("copy-dir");
const fs = require("fs");
var rimraf = require("rimraf");

let lastModified = -1;

var walkSync = function(dir, filelist) {
    dir = dir + '/';
    files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function(file) {
        let stat = fs.statSync(dir + file);
        if (stat.isDirectory()) {
            if (file != "node_modules") {
                filelist = walkSync(dir + file + '/', filelist);
            }
        } else {
            if (lastModified < stat.mtime) {
                lastModified = stat.mtime;
            } else {
                if (lastModified == -1)
                    lastModified = stat.mtime;
            }
            filelist.push(file);
        }
    });
    return filelist;
};


const options = {
    utimes: false, // Boolean | Object, keep addTime or modifyTime if true
    mode: false, // Boolean | Number, keep file mode if true
    cover: true, // Boolean, cover if file exists
    filter: function(stat, filepath, filename) {
        let isMatch = filepath.match(/\\node_modules/);
        if (stat === 'directory' && isMatch) {
            return false;
        }
        console.log(filepath.replace(process.cwd(), "    .."));

        return true;
    }
}

let doCopy = false;
let destination = path.resolve("./packages/mobile-app/node_modules/app-interface");
let source = path.resolve("./packages/app-interface");

try {
    if (!fs.existsSync(source)) {
        fs.mkdirSync(source);
    }

    if (!fs.existsSync(destination)) {
        fs.mkdirSync(destination);
        doCopy = true;
    }
} finally {
    walkSync(source, []);
}

try {
    let destStats = fs.lstatSync(destination);
    let srcStats = fs.lstatSync(source);

    if (destStats.isSymbolicLink()) {
        console.log("Destroying symlink");
        doCopy = true;
    }

    if (!doCopy) {
        doCopy = (lastModified > destStats.mtime)
    }

    if (doCopy)
        rimraf.sync(destination);

} catch (e) {
    console.log(e);
} finally {
    if (doCopy) {
        console.log("Copying directory...");
        copydir.sync(source, destination, options);
    } else {
        console.log("No copy performed");
    }
}