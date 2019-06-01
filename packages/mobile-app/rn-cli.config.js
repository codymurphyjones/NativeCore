const blacklist = require("metro-config/src/defaults/blacklist");

module.exports = {
  resolver: {
    blacklistRE: blacklist([/app-interface\/node_modules\/react-.*/])
  }
};
