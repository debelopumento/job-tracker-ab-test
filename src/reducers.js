import { combineReducers } from "redux";

const spamPhoneScreenPerMinuteReducer = (state = 0, action) => {
	switch (action.type) {
		case "UPDATE_SPAM_PHONE_SCREEN_PER_MINUTE": {
			return action.payload;
		}
		default:
			return state;
	}
};

const spamTotalTimeReducer = (state = 0, action) => {
	switch (action.type) {
		case "UPDATE_SPAM_TOTAL_TIME": {
			return action.payload;
		}
		default:
			return state;
	}
};

const spamPhoneScreenCountReducer = (state = 0, action) => {
	switch (action.type) {
		case "UPDATE_SPAM_PHONE_SCREEN_COUNT": {
			return action.payload;
		}
		default:
			return state;
	}
};

const spamCountReducer = (state = 0, action) => {
	switch (action.type) {
		case "UPDATE_SPAM_COUNT": {
			return action.payload;
		}
		default:
			return state;
	}
};

const spamStartTimeReducer = (state = null, action) => {
	switch (action.type) {
		case "SPAM_TIMER_STARTS": {
			return action.payload;
		}
		default:
			return state;
	}
};

const jobApplicationTotalTimeReducer = (state = 0, action) => {
	switch (action.type) {
		case "UPDATE_JOB_APPLICATION_TOTAL_TIME": {
			return action.payload;
		}
		default:
			return state;
	}
};

const jobApplicationPhoneScreenCountReducer = (state = 0, action) => {
	switch (action.type) {
		case "UPDATE_JOB_APPLICATION_PHONE_SCREEN_COUNT": {
			return action.payload;
		}
		default:
			return state;
	}
};

const jobApplicationPhoneScreenPerMinuteReducer = (state = 0, action) => {
	switch (action.type) {
		case "UPDATE_JOB_APPLICATION_PHONE_SCREEN_PER_MINUTE": {
			return action.payload;
		}
		default:
			return state;
	}
};

const jobApplicationStartTimeReducer = (state = null, action) => {
	switch (action.type) {
		case "START_JOB_APPLICATION": {
			return action.payload;
		}
		default:
			return state;
	}
};

const allReducers = combineReducers({
	spamCount: spamCountReducer,
	spamPhoneScreenCount: spamPhoneScreenCountReducer,
	spamTotalTime: spamTotalTimeReducer,
	spamPhoneScreenPerMinute: spamPhoneScreenPerMinuteReducer,
	spamStartTime: spamStartTimeReducer,
	jobApplicationTotalTime: jobApplicationTotalTimeReducer,
	jobApplicationPhoneScreenCount: jobApplicationPhoneScreenCountReducer,
	jobApplicationPhoneScreenPerMinute: jobApplicationPhoneScreenPerMinuteReducer,
	jobApplicationStartTime: jobApplicationStartTimeReducer
});

export default allReducers;
