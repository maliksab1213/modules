const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "good night",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "fk",
  description: "Good Night No Prefix",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

  var tl = ["Good Night Meri Jan😘", "Ok Sojao Je Ap😍", "Aww Neend arhi he meri jan ko😍", "Muaah jan sojao", "Roko Jan Kiss lelo phir suna😘", "Thk He Jan😍Good Night", "Okay Janu Je Sojaen😘",];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if (event.body.indexOf("good night") == 0 || (event.body.indexOf("Good Night") == 0)) {
 let userH = event.senderID 
    /*api.getUserInfo(parseInt(userH), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var firstname = data[obj].name.replace("@", ""); */
    
  const firstname = global.data.userName.get(userH) || await Users.getNameUser(userH);
	if (event.senderID == api.getCurrentUserID()) return;

    var msg = {
      body: firstname + ", " + rand, 
      mentions: [{
          tag: firstname,
          id: userH
        }]
    }
    return api.sendMessage(msg, threadID, messageID);
    //  })
  };
  let input2 = event.body.toLowerCase();
if(input2.includes("haha") || input2.includes("lmao") || input2.includes("lol") || input2.includes("😂") || input2.includes("😹") || input2.includes("🤣") || input2.includes("😆") || input2.includes("😄") || input2.includes("😅") || input2.includes("xd")){
					        	return api.setMessageReaction("😆", event.messageID, (err) => {}, true)
} 
    if(input2.includes("kawawa") || input2.includes("sad") || input2.includes("agoi") || input2.includes("sakit") ||input2.includes("skit") || input2.includes("pain") || input2.includes("pighati")){
					        	return api.setMessageReaction("😢", event.messageID, (err) => {}, true)
    }


}

module.exports.run = function({ api, event, client, __GLOBAL }) { }