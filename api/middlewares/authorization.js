const { PASSWORD } = require("../config");

const isAuth = (req, res, next) => {
	const password = req.headers.authorization;

	if (password !== PASSWORD) {
		return res.status(401).json({
			success: false,
			message: "Unauthorized.Please provide a valid authorization token!",
		});
	}

	next();
};

module.exports = isAuth;
