module.exports.config = {
  name: "fightlin",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "fk",
    description: "fyt",
    commandCategory: "edit-img",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": ""
    }
};
module.exports.run = async ({ api, event,args }) => {  {
      
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
	 let text = args.join(" ")
  if (!text) return api.sendMessage('Please enter the correct format [text1 | text2 ]!', event.threadID, event.messageID);
  const length_0 = parseInt(text.length)
  const text1 = text.substr(0, text.indexOf(' | ')); 
  if (!text1) return api.sendMessage('Please enter the correct format [text1 | text2 ]!', event.threadID, event.messageID);
  const length = parseInt(text1.length)
  const text3 = text.split(" | ").pop()
  if (!text3) return api.sendMessage('Please enter the correct format [text1 | text2 | text3]!', event.threadID, event.messageID);
  const length_3 = parseInt(text3.length)
  const text2 = text.slice(length+2, length_0-length_3-2)
  if (!text2) return api.sendMessage('Please enter the correct format [text1 | text2 | text3]!', event.threadID, event.messageID);
  
  
	 var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/poh.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/poh.png"),event.messageID);
	 return request(encodeURI(`https://api.memegen.link/images/captain-america/${text1}/${text2}/${text3}.png`)).pipe(fs.createWriteStream(__dirname+'/cache/poh.png')).on('close',() => callback());     
}}