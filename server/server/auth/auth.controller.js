/**
 * This is a protected route. Will return user details only if jwt token is provided in header.
 * @param req
 * @param res
 * @returns {*}
 */
function getUser(req, res) {
	//	if valid token was provided then
	//	req.user is already assigned by auth middleware

	return res.json({
		user: req.user
	});
}

module.exports = { getUser };
