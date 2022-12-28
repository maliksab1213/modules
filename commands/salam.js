const fs = require("fs");
module.exports.config = {
	name: "Salam",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "Fk", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("salam") || react.includes("Salam") || react.includes("assalamualaikum") || react.includes("Assalamualaikum") || react.includes("Assalam o Allaikum") || react.includes("Assalmualaykum") || react.includes("assalam o allaikum") || react.includes("SALAM") || react.includes("ASSALAMUALAIKUM") || react.includes("assalam-o-allaikum") || react.includes("Assal-o-Allaikum") || react.includes("assalam-u-allaikum") || react.includes("Assalam-U-Allaikum") || react.includes("A O A") || react.includes("AOA") || react.includes("AssalamuAllaikum") || react.includes("A o A") || react.includes("salam") || react.includes("Salam") || react.includes("Assalamoallaikum") || react.includes("assalamoallaikum") || react.includes("Assalam O Allaikum") || react.includes("salam") || react.includes("a o a") || react.includes("sALAM") || react.includes("salam") || react.includes("Salam") || react.includes("salam") || react.includes("salam") || react.includes("Salam") || react.includes("Salam") || react.includes("SALAM") || react.includes("salam") || react.includes("salam") || react.includes("Salam")) {
		var msg = {
				body: "Walaikum As Salam♥️"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

		 }