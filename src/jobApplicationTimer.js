import React, { PureComponent, ProprTypes } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";

class JobApplicationTimer extends PureComponent {
	startJobApplicationTimer = () => {
		const now = new Date();
		this.props.startJobApplicationTimer();
		this.props.loadJobApplicationData();
	};
	endJobApplicationTimer = () => {
		this.props.endJobApplicationTimer();
		this.props.loadJobApplicationData();
	};

	componentDidUpdate() {
		console.log(4);
	}
	render() {
		return (
			<div>
				<p>
					Job Application start time:
					{" "}
					{this.props.jobApplicationStartTime}
				</p>

				<button onClick={this.startJobApplicationTimer}>
					start job application timer
				</button>
				<button onClick={this.endJobApplicationTimer}>
					end job application timer
				</button>
			</div>
		);
	}
}

export default connect(
	storeState => ({
		jobApplicationStartTime: storeState.jobApplicationStartTime
	}),
	{
		loadJobApplicationData: actions.loadJobApplicationData,
		startJobApplicationTimer: actions.startJobApplicationTimer,
		endJobApplicationTimer: actions.endJobApplicationTimer
	}
)(JobApplicationTimer);
