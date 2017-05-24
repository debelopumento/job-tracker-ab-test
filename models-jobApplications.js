const mongoose = require("mongoose");

const jobApplicationSchema = mongoose.Schema({
	id: String,
	applicationCount: Number,
	phoneScreenCount: Number,
	totalTimeInvested: Number, //minutes
	temperaryStartTime: Date,
	phoneScreenPerMinute: Number
});

jobApplicationSchema.methods.apiRepr = () => {
	return {
		id: this._id,
		applicationCount: this.applicationCount,
		phoneScreenCount: this.phoneScreenCount,
		totalTimeInvested: this.totalTimeInvested,
		temperaryStartTime: this.temperaryStartTime,
		phoneScreenPerMinute: this.phoneScreenPerMinute
	};
};

const JobApplications = mongoose.model(
	"JobApplications",
	jobApplicationSchema,
	"customizedapplicationcollection"
);

module.exports = { JobApplications };
