module.exports.config = {
    name: "ureset",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "fk",
    description: "Reset the money of the specified user to 0",
    commandCategory: "System",
    usages: "[userID]",
    cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies, args }) => {
    const userID = args[0];
    if (!userID) return api.sendMessage("Please specify a user ID to reset their money!", event.threadID);

    const currenciesData = await Currencies.getData(userID);
    if (currenciesData == false || currenciesData.money == 0) {
        return api.sendMessage("This user doesn't have any money to reset!", event.threadID);
    }

    await Currencies.setData(userID, { money: 0 });
    return api.sendMessage(`Money for user with ID ${userID} has been reset to 0!`, event.threadID);
}
