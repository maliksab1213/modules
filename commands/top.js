﻿module.exports.config = {
	name: "top",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "fk",
    description: "Check Money",
	commandCategory: "Economy",
	usages: "",
	cooldowns: 1,
	dependencies: [],
  
};

module.exports.run = async({api,event,args,Currencies}) => {
	var fs = require("fs-extra");
	var request = require("request");  // Covernt exp to level
    function expToLevel(point) {
	if (point < 0) return 0;
	return Math.floor((Math.sqrt(1 + (4 * point) / 3) + 1) / 2);
    }
    if(args.length == 0) api.sendMessage("/top [user/money]", event.threadID, event.messageID)
    //level
    if (args[0] == "user") { 
    let all = await Currencies.getAll(['userID', 'exp']);
				all.sort((a, b) => b.exp - a.exp);
				let num = 0;
	             let msg = {
					body: 'Top 15 highest Power Level Holders',
					
				}
				for (var i = 0; i < 15; i++) {
					    let data = await api.getUserInfo(all[i].userID);
   
					let level = expToLevel(all[i].exp);
					let name = await data[all[i].userID].name;
  
					num += 1;
					msg.body += '\n' + num + '. ' + name + ' -LEVEL ' + level;}
                    api.sendMessage(msg, event.threadID, event.messageID)
		}
	
 if (args[0] == "money") { 
    let all = await Currencies.getAll(['userID', 'money']);
				all.sort((a, b) => b.money - a.money);
				let num = 0;
	             let msg = {
					body: '» Top 15 Highest Reach People',
					
				}
				for (var i = 0; i < 15; i++) {
					    let data = await api.getUserInfo(all[i].userID);
   
					let level = all[i].money;
					let name = await data[all[i].userID].name;
                    
					num += 1;
					msg.body += '\n' + num + '. ' + name + ': ' + level + " $";}
                    console.log(msg.body)
                    api.sendMessage(msg, event.threadID, event.messageID)
		}

	}


