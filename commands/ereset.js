module.exports.config = {
    name: "ereset",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "fk",
    description: "Reset the exp of the specified user's exp to 0",
    commandCategory: "System",
    usages: "[userID]",
    cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies, args }) => {
    const userID = args[0];
    if (!userID) return api.sendMessage("Please specify a user ID to reset their exp!", event.threadID);

    const currenciesData = await Currencies.getData(userID);
    if (currenciesData == false || currenciesData.exp == 0) {
        return api.sendMessage("This user doesn't have any exp to reset!", event.threadID);
    }

    await Currencies.setData(userID, { exp: 0 });
    return api.sendMessage(`Exp for user with ID ${userID} has been reset to 0!`, event.threadID);
}

