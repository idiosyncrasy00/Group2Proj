# Group 2 Project

## 1. Project framework

### - Building:
Bootstrap + VueJS + Axios + ExpressJS + NodeJS + Sequelize + MySQL

### - Deployment:
Nginx + Docker

## 2. Deployment

### - Production deploy
```
docker-compose up -d
```

### - Development deploy
```
docker-compose -f docker-compose-dev.yml up -d
```
*Note: You can stop the container including all services inside it by running this command:*
```
docker-compose -f docker-compose-dev.yml down
```

### - Non-docker development deploy
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
- *Note: There's no Adminer database manager for Non-docker deploy. You need to install it yourself.*

## 3. Default url and port
URL | Application
-- | --
http://localhost:8080 | Client
http://localhost:3000 | Server
http://localhost:8081 | Adminer (database manager)

## 4. Note
### - Adminer default credential
```
System: MySQL
Server: db
Username: root
Password: admin
Database:
```
