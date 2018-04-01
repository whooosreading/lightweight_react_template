# Lightweight React Template

Lightweight React app with npm and webpack. One use of this project is to add a small internal front end to backend services.

Everything interesting lives in `appdev`, and you should cd into that directory for most work.

## Includes

- NPM
- Webpack
- React
- Sass
- Underscore
- JQuery

Defined with global scope:
- React, ReactDOM
- $ (JQuery), _ (underscore)

## Port

Runs by default on port 40000. Customize this in `server.js`.

## Routing

There is very primitive routing possible by editing `App.js` logic.

## Running the app

```
cd appdev
foreman start -f Procfile.dev
```

Or, in seperate tabs:

```
cd appdev
npm start
```

```
cd appdev
npm run webpack
```
