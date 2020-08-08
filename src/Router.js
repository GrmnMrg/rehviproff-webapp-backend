const bcrypt = require('bcrypt');
const User = require('./models/User');

class Router {

	constructor(app, db) {
		this.login(app, db);
		this.logout(app, db);
		this.isloggedin(app, db);
	}

	login(app, db) {

		app.post('/login', async (req, res) => {

			let username = req.body.username;
			let password = req.body.password;

			const user = await User.findOne({ username: username });

			console.log(user);

			if (user) {

				bcrypt.compare(password, user.password, (bcryptErr, verified) => {

					if (verified) {

						req.session.userID = user._id;

						res.json({
							success: true,
							username: user.username
						});

						return;

					} else {

						res.json({
							success: false,
							msg: 'Invalid password'
						});

					}

				});

			} else {

				res.json({
					success: false,
					msg: 'User not found'
				});

			}

		});

	}

	logout(app, db) {

		app.post('/logout', (req, res) => {

			console.log(req.session.userID)

			if (req.session.userID) {

				req.session.destroy();
				res.json({
					success: true
				});
				return true;

			} else {

				res.json({
					success: false
				});
				return false;

			}

		});

	}

	isloggedin(app, db) {

		app.post('/isloggedin', async (req, res) => {

			if (req.session.userID) {

				const user = await User.findOne({ _id: req.session.userID });

				if (user) {
					res.json({
						success: true,
						username: user.username
					});

					return true;
				} else {
					res.json({
						success: false
					});
					return false;
				}

			} else {

				res.json({
					success: false
				});
				return false;

			}

		});

	}

}

module.exports = Router;