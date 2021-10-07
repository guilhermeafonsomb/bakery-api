# FinderUp-api-bakery

> This is a simple api to a technical challenge

I made this API to manage a bakery. With inputs of raw materials and quantities. Outputs of these raw material and a manager repor with each outputs and the responsible of these outputs.

## Used tecnologies

1. NodeJs;
2. Typescript
3. Typeorm;
4. Express;
5. Tsyring;

## Setup Installation

1. Clone this repo;
2. Install ``` yarn ``` in your PC;
3. Install ``` docker ``` and ``` docker-compose ```;

## Develoment setup inside docker container

1. To install all dev dependencies, run ``` yarn ``` in package.json directory;
2. In your terminal on project directory, run ``` docker-compose up -d ``` ;

## Develoment setup localhost

1. To install all dev dependencies, run ``` yarn ``` in package.json directory;
2. In your terminal on project directory, run ``` yarn typeorm migratio:run ``` ;
4. To start this project run your terminal ``` yarn dev ```;

## How to use

1. You need a API platform app, like insomnia or postman;
2. The server is open in ``` PORT 3000 ```;
3. The hedears must be ``` Content-Type ``` and ``` application/json ```;
4. You need create a user to insert informations;
5. The tour to create a user is ``` /users ```, is a method a POST in json format;
```json
{
	"name": "Lau",
	"position": "Estoquista"
}
```
4. Create a other method a POST in format json into rout ``` /rawMaterials ```;
```json
{
	"name": "PC",
	"quantity": 1,
	"user": "Lau"
}
```
5. Create a method a GET into route, and after "=" put the name of your product ``` /rawMaterials?name=PC ```. The return of the console must have a id, copy this id before you pass to the next step;
```json
[
  {
    "id": "e6cdd21a-f64c-420a-b508-66169c08fa16",
    "name": "PC",
    "quantity": 8,
    "user": "Lau"
  }
]
```
7. Create a method a PUT into route ``` /rawMaterials/e6cdd21a-f64c-420a-b508-66169c08fa16/request ```, don't forget to paste id into the route, after ```/rawMaterials/```. The PUT is a json format too and should look like this. Don't forget to put the quantity you want to decrement;
```json
{
	"quantity": 1,
	"user": "Lau"
}
```
8. Finally create a GET method and put the name of your user after "=" into route ``` /rawMaterials?user=Lau ```, to get all the things this user do in this application. Something like this;
```json
[
  {
    "id": "f05ff524-0183-4a60-9624-b06d73c36cfb",
    "name": "Xicara",
    "quantity": 1,
    "user": "Lau",
    "createdDate": "2021-10-07T15:02:53.630Z"
  },
  {
    "id": "b57eb7ec-e05e-4081-901d-3a78c910319b",
    "name": "Xicara",
    "quantity": 1,
    "user": "Lau",
    "createdDate": "2021-10-07T15:02:55.133Z"
  }
]
```
