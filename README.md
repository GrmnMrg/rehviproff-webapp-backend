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

### Endpoints

#### User endpoints
	* api/user/register
		Register new user. Requires username, email and password. First-name and last-name are optional.
	* api/user/isloggedin * To Be Done *
		Endpoint to check if the user is logged in (aka has a session up and running).
	* api/user/login
		Log in the user. On successful log in sets a JWT (Jason Web Token) in the header that is used to restrict access to some API endpoints.
	* api/user/logout * To Be Done *
		TBD. Endpoint that kills the session, removes the JWT and lets you log in with another user.

#### Workorder enpoints
	* api/order/		* To Be Done * Gets like 10 latest orders
	* api/order/save	* To Be Done * Save a new order or update an existing one
	* api/order/del 	* To Be Done * Delete an order