const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

mongoose.Promise = global.Promise;

try {
	require("dotenv").config();
} catch (error) {
	console.warn("unable to load .env");
}

const { PORT, DATABASE_URL } = require("./config");
console.log("DATABASE_URL: ", DATABASE_URL);

const { Spams } = require("./models-spam");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("common"));

app.get("/spamLookup", (req, res) => {
	Spams.findById("5923aa19f36d285f678a6654")
		.exec()
		.then(data => {
			res.json({ data });
		})
		.catch(err => {
			res.json({ message: "Internal server error" });
		});
});

app.put("/spamStart", (req, res) => {
	const now = new Date().getTime();
	console.log(now);
	const reqBody = { temperaryStartTime: now };
	Spams.findByIdAndUpdate("5923aa19f36d285f678a6654", reqBody)
		.exec()
		.then(date => {
			res.json({ message: `Started spamming at: ${now}` });
		})
		.catch(err => {
			res.json({ message: "Internal server error" });
		});
});

app.put("/spamEnd", (req, res) => {
	const now = new Date().getTime();

	Spams.findById("5923aa19f36d285f678a6654").exec().then(data => {
		const spamStart = data.temperaryStartTime.getTime();
		const spamDuration = Math.floor((now - spamStart) / 60000);
		const totalTimeInvested = data.totalTimeInvested + spamDuration;
		console.log(10, totalTimeInvested);
		const reqBody = {
			totalTimeInvested: totalTimeInvested
		};

		Spams.findByIdAndUpdate("5923aa19f36d285f678a6654", reqBody)
			.exec()
			.then(date => {
				res.json({
					message: `Total time invested in spamming: ${totalTimeInvested} minutes.`
				});
			})
			.catch(err => {
				res.json({ message: "Internal server error" });
			});
	});
});

app.use("*", function(req, res) {
	res.status(404).json({ message: "Not Found" });
});

let server;

function runServer(databaseUrl = DATABASE_URL, port = PORT) {
	return new Promise((resolve, reject) => {
		mongoose.connect(databaseUrl, err => {
			if (err) {
				return reject(err);
			}
			server = app
				.listen(port, () => {
					console.log(`Your app is listening on port ${port}`);
					resolve();
				})
				.on("error", err => {
					mongoose.disconnect();
					reject(err);
				});
		});
	});
}
function closeServer() {
	return mongoose.disconnect().then(() => {
		return new Promise((resolve, reject) => {
			console.log("Closing server");
			server.close(err => {
				if (err) {
					return reject(err);
				}
				resolve();
			});
		});
	});
}

if (require.main === module) {
	runServer().catch(err => console.error(err));
}

module.exports = { app, runServer, closeServer };
