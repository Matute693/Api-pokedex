<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clone the repository

```
npm install
```
2. Run

```
npm run start:dev
```

3. Have NESt CLI installed

```
npm i -g @nestjs/cli
```

4. Raise the database

```
docker-compose up -d
```

You can use MongooseDB Compass or TablePlus to serve your database by connecting PORT:

```
mongodb://localhost:27017/nest-pokemon
```


With this command you can generate a new endpoint in the REST API

```
nest g res pokemon --no-spec
```

ENDPOINTS

localhost:3000/api/v2/pokemon

METHOD
/GET filter by id

localhost:3000/api/v2/pokemon/:id

 /POST create Pokemon 
-body
```
{
    "no": 1,
    "name": "pikachu"
}
```

localhost:3000/api/v2/pokemon/:id
/PATCH updated Pokemon
```
{
    "no": 1,
    "name": "charmander"
}
```

localhost:3000/api/v2/pokemon/:id
/DELETE delete Pokemon


## Stack used

* MongoDB
* NestJS