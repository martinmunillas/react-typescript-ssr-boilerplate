# React-Typescript-SSR-Boilerplate
Just clone and have a fast launch

## Stack
Tyescript, React, ApolloClient, Docker, Jest, Cypress

### How to start!
  - Make a clone of this repository
  - CD into the folder of the project
  - Run ```docker-compose up -d```
  - Go to your browser on localhost:4000 and enjoy
 
### How to develop
  - Make sure you have the environment variables correct on the docker-compose.yml, if you change the API_URL, makes sure to change it on the codegen.yml as well
  - Run ```docker-compose up -d```,  ```yarn type:dev``` and ```yarn build:dev``` at the same time
  - Edit the code and do whatever you want
  - Run ```yarn gen``` every time you change the .graphql files

##### Other commentaries:

 - To see the app logs run ```docker-compose logs -f```
 - If you are using the project with a development api in your localhost you should include dotenv in the project and run it directly and not with docker
