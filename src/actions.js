import axios from "axios";
import store from "./store";

const host = process.env.NODE_ENV === "production"
	? "/"
	: "http://localhost:8080/";

export const loadSpamData = () => dispatch => {
	const url = "http://localhost:8080/spamLookup";
	return axios
		.get(url)
		.then(data => {
			console.log(1, data.data.data);
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
		})
		.catch(e => {
			console.log(e);
		});
};
