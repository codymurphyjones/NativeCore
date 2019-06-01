
const transpileDeps = [];
const transpileNestedDeps = [];
const noTranspile = [];

//Load package.json and transpile.json
var transpilejs = require('./transpile.json')
var packagejson = require('./package.json')

//Add to transpile list
function AddTranspile(item)
{
    if (!transpileDeps.includes(item))
    {
        transpileDeps.push(item);
    }
}

Object.keys(transpilejs.transpile).forEach(function(item)
{
    AddTranspile(transpilejs.transpile[item]);
});

Object.keys(packagejson.dependencies).forEach(function(item)
{

    if (!transpilejs.noTranspile.includes(item))
    {
        AddTranspile(item);
    }
});


module.exports = transpileDeps;