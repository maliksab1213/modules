module.exports.config = {
	name: "quiz",
	version: "1.0.0",
	credits: "fk",
	hasPermssion: 0,
	description: "Answer questions (English)",
	commandCategory: "game",
	cooldowns: 5,
	dependencies: {
		"axios": ""
	}
};

module.exports.handleReaction = ({ api, event, handleReaction }) => {
	if (event.userID !== handleReaction.author) return;
	let response = "";
	if (event.reaction == "👍") response = "True"
	else response = "False";
	const userName = global.data.userName.get(event.userID);
	if (response == handleReaction.answer) api.sendMessage(`Congrats ${userName}, you got the answer right 🎉`, event.threadID);
	else api.sendMessage(`Oops ${userName}, you got the answer wrong 😔 The correct answer is ${handleReaction.answer}`, event.threadID);
	const indexOfHandle = global.client.handleReaction.findIndex(e => e.messageID == handleReaction.messageID);
	global.client.handleReaction.splice(indexOfHandle, 1);
	handleReaction.answerYet = 1;
	return global.client.handleReaction.push(handleReaction);
}

module.exports.run = async ({  api, event, args }) => {
	const axios = global.nodemodule["axios"];
	let difficulties = ["easy", "medium", "hard"];
	let difficulty = args[0];
	(difficulties.some(item => difficulty == item)) ? "" : difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
	let fetch = await axios(`https://opentdb.com/api.php?amount=1&encode=url3986&type=boolean&difficulty=${difficulty}`);
	if (!fetch.data) return api.sendMessage("Can't find the question because the server is busy", event.threadID, event.messageID);
	const question = decodeURIComponent(fetch.data.results[0].question);
	const userName = global.data.userName.get(event.userID);
	api.sendMessage(`Here is the question for you, ${userName}:\n        ${question}\n\n   👍: True       😢: False`, event.threadID, async (err, info) => {
		global.client.handleReaction.push({
			name: "quiz",
			messageID: info.messageID,
			author: event.senderID,
			answer: fetch.data.results[0].correct_answer,
			answerYet: 0
		});
		await new Promise(resolve => setTimeout(resolve, 20 * 1000));
		const indexOfHandle = global.client.handleReaction.findIndex(e => e.messageID == info.messageID);
		let data = global.client.handleReaction[indexOfHandle];
		if (data.answerYet !== 1) {
			api.sendMessage(`Time out!! The correct answer is ${fetch.data.results[0].correct_answer}`, event.threadID, info.messageID);
			return global.client.handleReaction.splice(indexOfHandle, 1);
		}
		else return;
	});
}
