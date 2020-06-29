const { OAuth2Client } = require('google-auth-library');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');
const config = require('../../config/config');
const Auth = require('../auth/auth.model');

const client = new OAuth2Client(config.clientId);

async function authenticate(req, res, next) {
	try {
		var token;

		/**
		 * Safely extract token id from Authorization header.
		 */
		if (req.headers && req.headers.authorization) {
			var parts = req.headers.authorization.split(' ');
			if (parts.length == 2) {
				var scheme = parts[0];
				var credentials = parts[1];

				if (/^Bearer$/i.test(scheme)) {
					token = credentials;
				} else {
					throw new APIError(
						'Authentication error: Bad Scheme',
						httpStatus.UNAUTHORIZED,
						true
					);
				}
			} else {
				throw new APIError(
					'Authentication error: Bad Format',
					httpStatus.UNAUTHORIZED,
					true
				);
			}
		} else {
			//	ToDo: cookie token
			throw new APIError(
				'Authorization Header Missing',
				httpStatus.UNAUTHORIZED,
				true
			);
		}

		//	search and load user, corresponding to the token from db
		const user = await Auth.findOne({ token });

		if (user) {
			req.user = user;
			return next();
		}

		//	token was not found in the db
		//	implicates that its a new user or old user re-logging in,
		//	get verified token details from google oauth
		const ticket = await client.verifyIdToken({
			idToken: token,
			audience: config.clientId
		});

		const payload = ticket.getPayload();
		const { hd: domain, email } = payload;

		//	check is user belongs to iitj
		if (domain === 'iitj.ac.in') {
			//	check if one of the old registered user has re-loggedin
			const registeredUser = await Auth.findOne({ email });

			if (registeredUser) {
				// old user found
				// update details and token
				const newUser = await Auth.findOneAndUpdate(
					{ email },
					{ token, ...payload },
					{ new: true }
				);

				req.user = newUser;
				return next();
			} else {
				// register payload for new user
				const newUser = new Auth({ token, ...payload });
				await newUser.save();

				req.user = newUser;
				return next();
			}
		} else {
			throw new APIError(
				'Login with IITJ email id',
				httpStatus.UNAUTHORIZED,
				true
			);
		}
	} catch (err) {
		if (!(err instanceof APIError)) {
			const apiError = new APIError(err.message, httpStatus.UNAUTHORIZED, true);
			return next(apiError);
		}
		return next(err);
	}
}

module.exports = authenticate;
