module.exports.config = {
    name: "sim2",
  version: "1.0.0",
    hasPermssion: 0,
    credits: "fk", 
    description: "simsimi created by fk ",
    commandCategory: "Simsimi",
    usages: "(text)",
  cooldowns: 5, 
}
module.exports.run = async ({ api, event, args }) => { 
    const senku = global.nodemodule.axios
    let ryusui = args.join(' ')
    const gen = await senku.get(
    'https://api.phamvandien.xyz/sim?type=ask&ask=' + ryusui
)
    var tsukasa = gen.data.answer
    return api.sendMessage('' + tsukasa, event.threadID, event.messageID)
    }