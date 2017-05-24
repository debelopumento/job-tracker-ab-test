import React, { PureComponent, ProprTypes } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import JobApplicationTimer from "./jobApplicationTimer";

class JobApplicationStats extends PureComponent {
	incrementPhoneScreenCount = () => {
		this.props.addPhoneScreen_jobApplication();
	};
	componentWillMount() {
		this.props.loadJobApplicationData();
	}

	render() {
		if (this.props.jobApplicationPhoneScreenPerMinute != null) {
			return (
				<div>
					<p>
						Total time spent on job applications:
						{this.props.jobApplicationTotalTime}minutes
					</p>
					<p>
						Phone screens gotten from job applications:
						{this.props.jobApplicationPhoneScreenCount}
					</p>
					<p>
						Phone screen count per minute:
						{this.props.jobApplicationPhoneScreenPerMinute}
					</p>
					<JobApplicationTimer />
					<button onClick={this.incrementPhoneScreenCount}>
						Increment phone screen from job applications
					</button>
				</div>
			);
		}
		return <div>test</div>;
	}
}

export default connect(
	storeState => ({
		jobApplicationTotalTime: storeState.jobApplicationTotalTime,
		jobApplicationPhoneScreenCount: storeState.jobApplicationPhoneScreenCount,
		jobApplicationPhoneScreenPerMinute: storeState.jobApplicationPhoneScreenPerMinute
	}),
	{
		loadJobApplicationData: actions.loadJobApplicationData,
		addPhoneScreen_jobApplication: actions.addPhoneScreen_jobApplication
	}
)(JobApplicationStats);
