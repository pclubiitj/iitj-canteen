const Promise = require('bluebird');
const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');

/**
 * Auth Schema
 */
const AuthSchema = new mongoose.Schema({
	token: {
		type: String,
		required: true,
		select: false
	},
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		match: [
			/^((([a-z]{1,}\.[0-9]{1,})|([a-z]{1,}))@iitj\.ac\.in)$/,
			'The value of {PATH} {VALUE} is not a valid iitj email id.'
		]
	},
	picture: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
AuthSchema.method({});

/**
 * Statics
 */
AuthSchema.statics = {
	/**
	 * Get user
	 * @param {ObjectId} id - The objectId of user.
	 * @returns {Promise<Auth, APIError>}
	 */
	get(id) {
		return this.findById(id)
			.exec()
			.then((user) => {
				if (user) {
					return user;
				}
				const err = new APIError('No such user exists!', httpStatus.NOT_FOUND);
				return Promise.reject(err);
			});
	}
};

/**
 * @typedef Auth
 */
module.exports = mongoose.model('Auth', AuthSchema, 'users');
