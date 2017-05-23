import React, { PureComponent, ProprTypes } from "react";
import { connect } from "react-redux";
import store from "./store";
import * as actions from "./actions";

class Spams extends PureComponent {
	componentWillMount() {
		this.props.loadSpamData();
	}
	render() {
		if (this.props.spamCount != null) {
			return (
				<div>
					<p>Spam count: {this.props.spamCount}</p>
					<p>
						Total time spent on spam applications:
						{this.props.spamTotalTime}minutes
					</p>
					<p>
						Phone screens gotten from spam applicationss:
						{this.props.spamPhoneScreenCount}
					</p>
					<p>
						Phone screen count per minute:
						{this.props.spamPhoneScreenPerMinute}
					</p>
				</div>
			);
		}
		return <div>test</div>;
	}
}

export default connect(
	storeState => ({
		spamCount: storeState.spamCount,
		spamTotalTime: storeState.spamTotalTime,
		spamPhoneScreenCount: storeState.spamPhoneScreenCount,
		spamPhoneScreenPerMinute: storeState.spamPhoneScreenPerMinute
	}),
	{
		loadSpamData: actions.loadSpamData
	}
)(Spams);
