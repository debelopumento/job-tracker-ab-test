import React, { PureComponent, ProprTypes } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";

class SpamTimer extends PureComponent {
	startSpamTimer = () => {
		const now = new Date();
		this.props.startSpamTimer();
		this.props.loadSpamData();
	};
	endSpamTimer = () => {
		this.props.endSpamTimer();
		this.props.loadSpamData();
	};

	componentDidUpdate() {
		console.log(4);
	}
	render() {
		return (
			<div>
				<p>Spam start time: {this.props.spamStartTime}</p>

				<button onClick={this.startSpamTimer}>
					start spam timer
				</button>
				<button onClick={this.endSpamTimer}>
					end spam timer
				</button>
			</div>
		);
	}
}

export default connect(
	storeState => ({
		spamStartTime: storeState.spamStartTime
	}),
	{
		loadSpamData: actions.loadSpamData,
		startSpamTimer: actions.startSpamTimer,
		endSpamTimer: actions.endSpamTimer
	}
)(SpamTimer);
