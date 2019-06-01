const sidebar = require("../docs/sidebar.js");
console.log(sidebar);
module.exports = {
  title: 'NativeCore Documentation',
  description: 'Generated Documentation for NativeCore',
   themeConfig: {
	displayAllHeaders: true,
    sidebar: sidebar
  }
}