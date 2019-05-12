**What is NativeCore?**

NativeCore is the name I have given the personal App development system I have been working on.  I call it native core because despite a huge focus of the system being building a web app, you built it as if it were a react-native app.

It has a react-native core.

Use git to install NativeCore package collection
`git clone https://github.com/codymurphyjones/NativeCore.git`

`npm install`

To run the web app using next

`npm run web`

To run the mobile-app using Expo, you will need Expo on your phone or access to a simulator on your system

`npm run app`

Utilizing lerma for package management enabled me to split the dependencies into 3 modules.

- app-interface

- mobile-app

- website

app-interface is the core of the entire system.  app-interface is a node module that you will build react-native modules inside of.  Both projects then import the app-interface into their systems and convert them accordingly into a mobile-app or a web-app.

The default component within app-interface is AppHome

This component is set to be loaded by default in both the Web and Mobile App. 

In order to make changes to your packages available to the other packages run
`npm run bootstrap`

If you include additional react-native libraries, they need to be transpiled properly.

In order to ensure that a module is transpile we created transpile.js

transpile.js parses its way through your `package.json` and your` transpile.json` to determine which packages need to be transpiled within next.
If you are running into errors in that in web that do not exist on mobile, look into transpiling the problematic module.


