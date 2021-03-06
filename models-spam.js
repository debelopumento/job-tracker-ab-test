const mongoose = require("mongoose");

const spamSchema = mongoose.Schema({
	id: String,
	spamCount: Number,
	phoneScreenCount: Number,
	totalTimeInvested: Number, //minutes
	temperaryStartTime: Date,
	phoneScreenPerMinute: Number
});

spamSchema.methods.apiRepr = () => {
	return {
		id: this._id,
		spamCount: this.spamCount,
		phoneScreenCount: this.phoneScreenCount,
		totalTimeInvested: this.totalTimeInvested,
		temperaryStartTime: this.temperaryStartTime,
		phoneScreenPerMinute: this.phoneScreenPerMinute
	};
};

const Spams = mongoose.model("Spams", spamSchema, "spamcollection");

module.exports = { Spams };
