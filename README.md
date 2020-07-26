# Rehviproff Webapp Backend
An express server that serves static react folder from root level. Server itself exposes a bunch of API endpoints for the frontend app to use.

### To Start
clone the repo and cd into it
in terminal run "npm install"

### Development
in terminal run "npm run dev" (this will start nodemon instance, hotloading and compiling changes on the fly)
you have to manually add users to the mongo: rehviproff.users collection (with hashed passwords, check schema!)
When this server is running, you should be able to send requests for the server to respond and if you are using the client at the same time you should be able to us that to test the app.

### Production
In production the local enviornment should have pm2 installed and that should handle the service running
