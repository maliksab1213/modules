module.exports.config = {
    name: "betemoji",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "fk",
    description: "play with bot",
    commandCategory: "game",
    usages: "[betemoji amount + emoji]",
    cooldowns: 5,
};

module.exports.run = async function({ api, event, args, Currencies }) {
    const slotItems = ["😂", "☺️", "🤤", "🤑", "🥱", "🥰", "😋", "🥳", "😭", "🥺", "😱", "🤬"];
    const moneyUser = (await Currencies.getData(event.senderID)).money;
    var moneyBet = parseInt(args[0]);
    if (isNaN(moneyBet) || moneyBet <= 0) return api.sendMessage("Bet amount cannot be empty or negative", event.threadID, event.messageID);
	if (moneyBet > moneyUser) return api.sendMessage("The amount you bet is bigger than your balance!", event.threadID, event.messageID);
	if (moneyBet < 10) return api.sendMessage("The deposit amount cannot be less than 20$!", event.threadID, event.messageID);
  if (moneyBet > 1000000) return api.sendMessage(" The amount of $ bet cannot exceed 1,000,000$!", event.threadID, event.messageID);    
    var number = [], win = false;
    for (i = 0; i < 4; i++) number[i] = Math.floor(Math.random() * slotItems.length);
    if (number[0] == number[1] && number[1] == number[2] || number[0] == number[1] && number[1] == number[3] || number[0] == number[1] && number[2] == number[3]) {
        moneyBet *= 9;
        win = true;
    }
    else if (number[0] == number[1] || number[0] == number[2] || number[0] == number[3] || number[1] == number[2] || number[1] == number[3] || number[2] == number[3]) {
        moneyBet *= 2;
        win = true;
    }
    switch (win) {
        case true: {
            api.sendMessage(`🎭 » ${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]} | ${slotItems[number[3]]} « 🎭\nYou won with ${moneyBet}$ `, event.threadID, event.messageID);
            await Currencies.increaseMoney(event.senderID, moneyBet);
            break;
        }
        case false: {
            api.sendMessage(`🎭 » ${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]} | ${slotItems[number[3]]} « 🎭\nYou lost and lost ${moneyBet}$ `, event.threadID, event.messageID);
            await Currencies.decreaseMoney(event.senderID, moneyBet);
            break;
        }
    }
}