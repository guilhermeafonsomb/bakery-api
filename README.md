# bakery-api


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
3. Install ``` docker-compose ```, it's important if you are in windows and using docker toll box, you need change the localhost to IP docker tollbox on ormconfig.json file;
4. If  

## Develoment setup inside docker container

1. To install all dev dependencies, run ``` yarn ``` in package.json directory;
2. In your terminal on project directory, run ``` docker-compose up -d ``` ;
3. In your terminal on project directory, run ``` yarn typeorm migration:run ``` ;

## Develoment setup localhost

1. To install all dev dependencies, run ``` yarn ``` in package.json directory;
2. In your terminal on project directory, run ``` yarn typeorm migration:run ``` ;
4. To start this project run your terminal ``` yarn dev ```;
```
