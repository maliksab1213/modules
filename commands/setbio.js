module.exports.config = {
	name: "setbio",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "fk",
	description: "system",
	commandCategory: "System",
	usages: "setbio [bio]",
	cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
	 api.changeBio(`${args.join(" ")}`);
	  api.sendMessage(`done change to: :${args.join(" ")}`, event.threadID);
}