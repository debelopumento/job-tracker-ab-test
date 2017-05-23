import React, { PureComponent, ProprTypes } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import SpamTimer from "./spamTimer";

class Spams extends PureComponent {
	incrementSpamCount = () => {
		this.props.addSpamCount();
	};
	incrementSpamPhoneScreen = () => {
		this.props.addPhoneScreen_spam();
	};
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
						Phone screens gotten from spam applications:
						{this.props.spamPhoneScreenCount}
					</p>
					<p>
						Phone screen count per minute:
						{this.props.spamPhoneScreenPerMinute}
					</p>
					<SpamTimer />
					<button onClick={this.incrementSpamCount}>
						Increment spam count
					</button>
					<button onClick={this.incrementSpamPhoneScreen}>
						Increment spam phone screen
					</button>
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
		loadSpamData: actions.loadSpamData,
		addSpamCount: actions.addSpamCount,
		addPhoneScreen_spam: actions.addPhoneScreen_spam
	}
)(Spams);
