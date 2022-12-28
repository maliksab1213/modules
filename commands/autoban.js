module.exports.config = {
	name: "autoban",
	version: "1.0.1",
	hasPermssion: 2,
	credits: "fk malik",
	description: "auto ban abuser!",
	commandCategory: "system",
	usages: "[Text]",
	cooldowns: 5
};

module.exports.handleEvent = async ({
	event: o,
	api: t,
	Users: n
}) => {
	var {
		threadID: e,
		messageID: a,
		body: b,
		senderID: s,
		reason: d
	} = o;
	const i = require("moment-timezone").tz("Asia/Manila").format("HH:MM:ss L");
	if (s == t.getCurrentUserID()) return;
	let c = await n.getNameUser(o.senderID);
    //Sửa câu trả lời của Bạn
	var h = {
		body: `»Notice from Admin«\n\n${c}, You are stupid for cursing bots so bots automatically banned you from the system`
	};
    //Add curse words without capital letters
	["gandu bot", "chutya bot", "bot gandu", "bot harami", "tharki bot", "bot tharki", "botngu", "stupid bots", "chicken bot", "bots lol", "stupid bots lol", "dog bot", "dm bot", "fuck bots", "dmm bot", "dam bot", "mmm bot", "đb bot", "crazy bots", "bobo bot", "bot dở", "bot khùng", "đĩ bot", "bot paylac rồi", "con bot lòn", "cmm bot", "clap bot", "bot ncc", "bot oc", "bot óc", "bot óc chó", "cc bot", "bot tiki", "lozz bottt", "lol bot", "loz bot", "lồn bot", "bot lồn", "bot lon", "bot cac", "bot nhu lon", "bot như cc", "bot như bìu", "Bot sida", "bot sida", "bot fake", "Bảo ngu", "bot shoppee", "bad bots", "bot cau"].forEach((a => {
		
        const s = o.senderID;
		let d = a[0].toUpperCase() + a.slice(1);
		if (b === a.toUpperCase() | b === a | d === b) {
			modules = "chui bot:", console.log(c, modules, a);
			const o = n.getData(s).data || {};
			n.setData(s, {
				data: o
			}), o.banned = 1, o.reason = a || null, o.dateAdded = i, global.data.userBanned.set(s, {
				reason: o.reason,
				dateAdded: o.dateAdded
			}), t.sendMessage(h, e, (() => {
				const o = global.config.ADMINBOT;
				var n = o;
				for (var n of o) t.sendMessage(`=== Bot Notification ===\n\n🆘Sinners: ${c}\n🔰Uid: ${s}\n😥Send bots: ${a}\n\nBanned from the system`, n)
			}))
		}
	}))
}, module.exports.run = async ({
	event: o,
	api: t
}) => t.sendMessage("( \\_/)                                                                            ( •_•)                                                                            // >🧠                                                            Give me your brain and put it in your head.\nDo you know if it's the Noprefix command??", o.threadID);