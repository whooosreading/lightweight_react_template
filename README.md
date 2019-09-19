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
- Dockerfile (see below)

Defined with global scope:
- React, ReactDOM
- $ (JQuery), _ (underscore)

## Port

Runs by default on port 40000. Customize this in `server.js`.

## Routing

There is very primitive routing possible by editing `App.js` logic.

## Running the app

```bash
cd appdev
foreman start -f Procfile.dev
```

Or, in seperate tabs:

```bash
cd appdev
npm start
```

```bash
cd appdev
npm run webpack_watch
```

## Docker

If you want to run this app on a remote server, one option to simplify dependencies and to make it easy to run the server as a daemon is to use Docker. Don't use this set up for production use, keep it for toy applications or possibly small internal tools.

To run the docker service:
```bash
docker-compose build
docker-compose up # Runs the server in the foreground
docker-compose up -d # Runs the server in the background
```

## License

Lightweight React Template is distributed under the terms of the [MIT license](http://opensource.org/licenses/MIT) ([LICENSE](./LICENSE)).
