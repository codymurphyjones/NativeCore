### Next.js Transpile React-Native-Web

React-Native-Web has started providing a precompiled distribution which created errrors for anyone transpiling via next.

This repository shows the simple fix for this issue, on the react-native-web alias in webconfig.next.js ensure you are calling react-native-web/dist instead of the regular module.