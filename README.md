# Node.js Express API with ECMAScript 

## Description
This project was built in Node.js, Express, MongoDB, and ECMAScript.

## Running the API
Create an `.env` file using the command. You can use the default config or change it for your purposes. 

```bash
cp .env.example .env
```

### Environment
Configure for environment based on your configuration

```  
APP_URL=<APP_URL>
APP_PORT=<APP_PORT>
DB_PORT=<MONGO_DB_PORT>
MONGO_URI=<MONGO_URI>
MONGODB_USER=<MONGO_USER>
MONGODB_PASS=<MONGO_PASSWORD>
DB_NAME=<MONGO_DB_NAME>
JWT_SECRET=<JWT_SECRET>
JWT_EXPIRATION=<JWT_EXPIRATION>
```

### With Docker 
To run the API, you must install:
- **Docker** (https://www.docker.com/products/docker-desktop)
                                           
```
docker-compose up
```

### Without Docker 
To run the API, you must install:
- **Node.js** (https://nodejs.org/en/download/)
- **MongoDB** (https://www.mongodb.com/download-center/community)

Install Dependencies
```
npm install
```

Start the application in dev env:
```
npm run dev
```

Express server listening on http://localhost:3001/, in development mode

The developer mode will watch your changes then will transpile the ECMAScript code and re-run the node application automatically.


### API documentation:
API End points and documentation can be found at
[Postman Documentation](https://documenter.getpostman.com/view/5928045/TVeiEB5k)