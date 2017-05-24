import axios from "axios";
import store from "./store";

const host = process.env.NODE_ENV === "production"
	? "/"
	: "http://localhost:8080/";

export const loadJobApplicationData = () => dispatch => {
	const url = host + "jobApplicationLookup";
	return axios
		.get(url)
		.then(data => {
			dispatch({
				type: "UPDATE_JOB_APPLICATION_TOTAL_TIME",
				payload: data.data.data.totalTimeInvested
			});
			dispatch({
				type: "UPDATE_JOB_APPLICATION_PHONE_SCREEN_COUNT",
				payload: data.data.data.phoneScreenCount
			});
			dispatch({
				type: "UPDATE_JOB_APPLICATION_PHONE_SCREEN_PER_MINUTE",
				payload: data.data.data.phoneScreenPerMinute
			});
		})
		.catch(e => {
			console.log(e);
		});
};

export const addPhoneScreen_jobApplication = () => dispatch => {
	const url = host + "incrementPhoneScreenFromJobApplication";
	return axios
		.put(url)
		.then(data => {
			const jobApplicationPhoneScreenCount =
				store.getState().jobApplicationPhoneScreenCount + 1;
			dispatch({
				type: "UPDATE_JOB_APPLICATION_PHONE_SCREEN_COUNT",
				payload: jobApplicationPhoneScreenCount
			});
		})
		.catch(e => {
			console.log(e);
		});
};

export const startJobApplicationTimer = () => dispatch => {
	const url = host + "jobApplicationStart";
	return axios
		.put(url)
		.then(data => {
			const now = new Date().toString();
			dispatch({
				type: "START_JOB_APPLICATION",
				payload: now
			});
		})
		.catch(e => {
			console.log(e);
		});
};

export const endJobApplicationTimer = () => dispatch => {
	const url = host + "jobApplicationEnd";
	return axios
		.put(url)
		.then(data => {
			console.log(1011);
		})
		.catch(e => {
			console.log(e);
		});
};

export const loadSpamData = () => dispatch => {
	const url = host + "spamLookup";
	return axios
		.get(url)
		.then(data => {
			dispatch({
				type: "UPDATE_SPAM_COUNT",
				payload: data.data.data.spamCount
			});
			dispatch({
				type: "UPDATE_SPAM_PHONE_SCREEN_COUNT",
				payload: data.data.data.phoneScreenCount
			});
			dispatch({
				type: "UPDATE_SPAM_TOTAL_TIME",
				payload: data.data.data.totalTimeInvested
			});
			dispatch({
				type: "UPDATE_SPAM_PHONE_SCREEN_PER_MINUTE",
				payload: data.data.data.phoneScreenPerMinute
			});
			dispatch({
				type: "SPAM_TIMER_STARTS",
				payload: data.data.data.temperaryStartTime
			});
		})
		.catch(e => {
			console.log(e);
		});
};

export const startSpamTimer = () => dispatch => {
	const url = host + "spamStart";
	return axios
		.put(url)
		.then(data => {
			const now = new Date().toString();
			dispatch({
				type: "SPAM_TIMER_STARTS",
				payload: now
			});
		})
		.catch(e => {
			console.log(e);
		});
};

export const endSpamTimer = () => dispatch => {
	const url = host + "spamEnd";
	return axios
		.put(url)
		.then(data => {
			console.log(10);
		})
		.catch(e => {
			console.log(e);
		});
};

export const addSpamCount = () => dispatch => {
	const url = host + "oneMoreSpam";
	return axios
		.put(url)
		.then(data => {
			const spamCount = store.getState().spamCount + 1;
			dispatch({
				type: "UPDATE_SPAM_COUNT",
				payload: spamCount
			});
		})
		.catch(e => {
			console.log(e);
		});
};

export const addPhoneScreen_spam = () => dispatch => {
	const url = host + "oneMorePhoneScreen";
	return axios
		.put(url)
		.then(data => {
			const spamPhoneScreenCount =
				store.getState().spamPhoneScreenCount + 1;
			dispatch({
				type: "UPDATE_SPAM_PHONE_SCREEN_COUNT",
				payload: spamPhoneScreenCount
			});
		})
		.catch(e => {
			console.log(e);
		});
};
