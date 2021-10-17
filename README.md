# Group 2 Project

## Project framework:

### Building:
Bootstrap + VueJS + Axios + ExpressJS + NodeJS + Sequelize + MySQL

### Deployment:
Nginx + Docker

## Deployment:

### Production deploy
```
docker-compose up -d
```

### Development deploy
```
docker-compose -f docker-compose-dev.yml up -d
```
*Note: You need to manully install all dependencies first by running these commands:*
```
cd client/
npm install
cd ../server/
npm install
```

### Non-docker development deploy
**Client:**
```
cd client/
npm run serve
```
**Server:**
```
cd server/
npm start
```
**Database:**
- Run a SQL server in port 3306 (default port)
*Note: There's no Adminer database manager for Non-docker deploy. You need to install it yourself.*

## Default url and port:
URL | Application
-- | --
http://localhost:8080 | Client
http://localhost:3000 | Server
http://localhost:8081 | Adminer (database manager)
