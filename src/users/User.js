const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

const User = mongoose.model('users', userSchema);

module.exports = User;
