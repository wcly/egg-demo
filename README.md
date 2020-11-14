# egg-demo



## Egg QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

## Mongodb

### Init

use docker

```bash
docker pull mongo
docker pull mongo-express
```

### Start

```bash
docker run -d -p 27017:27017 --name mongodb -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=root mongo:latest

docker run -it --restart=always --name mongo-express --link mongodb:mongo -d -p 8081:8081 -e ME_CONFIG_OPTIONS_EDITORTHEME="3024-night" -e ME_CONFIG_BASICAUTH_USERNAME="root" -e ME_CONFIG_BASICAUTH_PASSWORD="root" -e ME_CONFIG_MONGODB_ADMINUSERNAME="root" -e ME_CONFIG_MONGODB_ADMINPASSWORD="root" mongo-express
```

### Open Mongoose-express

open `http://localhost:8081`

enter:
- username: root
- password: root 


## Swagger

open `localhost:7001/swagger-ui.html`