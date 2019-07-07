Web Test

Scripts 

**npm run start - node start.js && node server.js**
start the browser and the server in production mode

**npm run start-dev - react-scripts start**
uses default start, starts the app in development mode

**npm run build - react-scripts build**
build the app into production mode

**npm run test - react-scripts test**
run test

**npm run publish - chmod +x \"scripts/release.sh\" && \"scripts/release.sh\" && node deploy.js**
runs release.sh, which copies production .env into .env
afterwards, pushes into git branch 'deploy' using bash command 
deploy will usually be pr-ed into master
master will then be automatically built for production - https://tp-web-test.herokuapp.com/

**npm run test-publish - chmod +x \"scripts/staging.sh\" && \"scripts/staging.sh\" && node deploy-test.js**
runs dev.sh, which copies dev .env into .env
afterwards, pushes into git branch 'test' using bash command 
test will be automatically built for staging environment - https://rupiah-denominator.herokuapp.com/

**Test Cases**
npm run test - all test cases of _filename.js are defined in _filename.test.js under __tests__ folder

utility functions tests are located under src/util/__tests__

positive test - ['1', '1,0', '1,00', '100', '100,0', '100,00', '100.000', '10.000', '1.000.000'];
negative test - ['100.0', '100,', '100.00', '100,000', '100.00, 10.00, 1000.000'];

