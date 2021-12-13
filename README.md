#  Group 2 Project

Meeting Management is our midterm project for Web Development class (INT3306 22)
  
##  1. Project framework

###  - Development:

Bootstrap + VueJS + Axios + ExpressJS + NodeJS + Sequelize + MySQL

###  - Deployment:

Nginx + Docker

## 2. Deployment

### 2.1. Before deployment

 - If you want to use email sending feature, follow this [post](https://www.freecodecamp.org/news/use-nodemailer-to-send-emails-from-your-node-js-server/) to generate a gmail credential for nodemailer, then fill them on these 5 environment variables on both 2 files `server/.env` and `server/.env.development`:
```bash
NODEMAILER_USER=
NODEMAILER_CLIENTID=
NODEMAILER_CLIENTSECRET=
NODEMAILER_REFRESHTOKEN=
NODEMAILER_ACCESSTOKEN=
```
 - In the same 2 environment files above, set `DEV_EMAIL` variable to an email address (you can use your own email address to receive mails from the application).
 - For other variables, just leave them there by default.

###  2.2. Deploy with docker

You can easily deploy the whole project by one single docker command. Make sure to install [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) in your machine first.

####  - Production deploy in localhost:
```
docker-compose up -d
```
Make sure no process in your machine is using port 80 when deploying the project. After deployment, you can access the application by browsing these urls:
 - [`http://localhost`](http://localhost): for the main application
 - [`http://localhost/adminer`](http://localhost/adminer): for the database manager (adminer)

####  - Production deploy with domain name:
You can deploy the project publicly to a custom domain name while running it in a home server or even a cloud platform. You need to register a domain name, point it to your home server or cloud public IP address. Then edit the file `client/nginx.conf`and set `server_name` in line 15 to your domain name. For example:
```nginx
server_name		yourdomain.com www.yourdomain.com	
```
After that, you can deploy your application by running this command:
```
docker-compose up -d
```
The application can be accessed by running these urls;
- `http://${server_name}`: for the main application
- `http://${server_name}/adminer`: for the database manager (adminer)

####  - Development deploy:
If you want to deploy the project in development process for testing, you can run this command:
```
docker-compose -f docker-compose-dev.yml up -d
```

###  2.3. Deploy without docker (traditional way)
- First, install all dependencies by running these command:
```bash
cd client/
npm install
cd ../server/
npm install
```
- Second, start a MySQL server in port 3306 and create a database named `testdb`
- Lastly, you can use these commands to start client and server applications one by one: 
```bash
# For client
cd client/
npm run serve
```
```bash
# For server
cd server/
npm start
```
***Note**: There's no Adminer database manager for non-docker deployment. You need to install it yourself.*

##  3. Development guide

### 3.1. Application's default url and port

- http://localhost:8080 : Client
- http://localhost:3000 : Server
- http://localhost:8081 : Adminer (database manager)

###  3.2. Adminer default credential
```
System: MySQL
Server: db
Username: root
Password: admin
Database: testdb
```

###  3.3. Reset database
If you change the database structure, you have to reset the database before testing:
```bash
cd server/
npm run db_reset
```

### 3.4. Rebuild docker (for development docker deploy)
If you add, modify, delete a package, change an environment variable or modify something else that's outside the `src/` folder in both client and server application, you have to rebuild the docker image by running this command:
```
docker-compose -f docker-compose-dev.yml up -d --build
```

## 4. Real website

You can access our website in this url:
[http://group2meeting.tk/](http://group2meeting.tk/)

*Important note:*
*- Due to some limitations, the above website and our own gmail credential will be deprecated in December 25th 2021.*
