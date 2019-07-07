#Web Test

##Scripts 

#npm run start - node start.js && node server.js
start the browser and the server in production mode

#npm run start-dev - react-scripts start
uses default start, starts the app in development mode

#npm run build - react-scripts build
build the app into production mode

#npm run test - react-scripts test
run test

#npm run publish - chmod +x \"scripts/release.sh\" && \"scripts/release.sh\" && node deploy.js
run release.sh, which copies production .env into .env
afterwards, pushes into git branch deploy using bash command 