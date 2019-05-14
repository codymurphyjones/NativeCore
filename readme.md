**What is NativeCore?**

NativeCore is the name I have given the personal App development system I have been working on.  I call it native core because despite a huge focus of the system being building a web app, you built it as if it were a react-native app.

It has a react-native core.



**Getting Started**

Use git to install NativeCore package collection
`git clone https://github.com/codymurphyjones/NativeCore.git`

`npm install`



Additionally globally install the expo CLI

`npm install expo-cli --global`

And create an account here [at the expo.io website](https://expo.io/signup)



`expo login`



To run the web app using next

`npm run web`



To run the mobile-app using [Expo, you will need to download it on your device]([https://expo.io/](https://expo.io/)



`npm run app`



**Project Structure**

Utilizing lerma for package management enabled me to split the dependencies into 3 modules.

- **app-interface**

- **mobile-app**

- **website**



`app-interface` is the core of the entire system.  `app-interface` is a node module that you will build *react-native* modules inside of.  Both the `mobile-app` and `website` projects will then import the `app-interface` into their systems and convert them accordingly into a mobile-app or a web-app.



*The default component within app-interface is `AppHome`*



This component is set to be loaded by default in both the Web and Mobile App. 

In order to make changes to your packages available to the other packages run



`npm run bootstrap`



*app-interface is designed to have full support out of the box for react-native*



if you run into any issues they will probably relate to the module needing to be inside of the package.json for expo to ship it.  If that does not resolve the issue please create a repo to duplicate the code and I am happy to look into it.



**Next Requires Transpiling to support Native**

If you include additional react-native libraries, they need to be transpiled properly.  In order to ensure that a module is transpile we created` transpile.js`in the `packages/website` directory.



transpile.js parses its way through your `package.json` and your` transpile.json` to determine which packages need to be transpiled within next.
If you are running into errors in that in web that do not exist on mobile, look into transpiling the problematic module.
