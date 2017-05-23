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

const allReducers = combineReducers({
	spamCount: spamCountReducer,
	spamPhoneScreenCount: spamPhoneScreenCountReducer,
	spamTotalTime: spamTotalTimeReducer,
	spamPhoneScreenPerMinute: spamPhoneScreenPerMinuteReducer
});

export default allReducers;
