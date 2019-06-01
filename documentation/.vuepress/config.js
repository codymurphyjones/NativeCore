const sidebar = require("../sidebar.js");
console.log(sidebar);
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
   themeConfig: {
	displayAllHeaders: true,
    sidebar: sidebar
  }
}