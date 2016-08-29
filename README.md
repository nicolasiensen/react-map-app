# Getting started
Make sure you have [Node.js](https://nodejs.org/en/download/) installed, and then run the following commands inside of the project folder:

```
npm install
npm start
```

If everything goes right, you should see the project running at [http://localhost:3000/](http://localhost:3000/).

# To-do

## Features
- Improve the readability of the path in the map, some route colors are not easy to see;
- Change MaterialUI theme to match Door2Door's brand colors;
- Use Google Maps API as a NPM dependency, instead of including it into the `window` object.

## Tests
- Add more tests to cover all components;
- Find a way to simulate the MaterialUI's `onTouchTap` event;
- Use [Enzyme](https://github.com/airbnb/enzyme) to pass [context](https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md#mountnode-options--reactwrapper) to the tests;
