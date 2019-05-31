const jsdoc2md = require('jsdoc-to-markdown')

const docs = jsdoc2md.renderSync({ files: './packages/app-interface/*.js' })

console.log(docs);
console.log("test");