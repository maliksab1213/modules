module.exports.config = {
    name: "teach",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "fk",
    description: "File Reader Teach made by fk",
    commandCategory: "Simsimi",
    usages: "Teach",
    cooldowns: 2,
    dependencies: {
        "axios": ""
    }
};

module.exports.run = ({ api, event, args }) => {
    const { threadID, messageID, senderID } = event;
    return api.sendMessage("Reply this message enter question for simsimi", threadID, (err, info) => {
        global.client.handleReply.push({
            step: 1,
            name: this.config.name,
            messageID: info.messageID,
            content: {
                id: senderID,
                ask: "",
                ans: ""
            }
        })
    }, messageID);
}
module.exports.handleReply = async({ api, event, Users, handleReply }) => {
    const axios = require("axios");
    const fs = require("fs");
    const moment = require("moment-timezone");
    var timeZ = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss | DD/MM/YYYY");
    const { threadID, messageID, senderID, body } = event;
    let by_name = (await Users.getData(senderID)).name;
    if (handleReply.content.id != senderID) return;
    const input = body.trim();
    const sendC = (msg, step, content) => api.sendMessage(msg, threadID, (err, info) => {
        global.client.handleReply.splice(global.client.handleReply.indexOf(handleReply), 1);
        api.unsendMessage(handleReply.messageID);
        global.client.handleReply.push({
            step: step,
            name: this.config.name,
            messageID: info.messageID,
            content: content
        })
    }, messageID);
    const send = async(msg) => api.sendMessage(msg, threadID, messageID);

    let content = handleReply.content;
    switch (handleReply.step) {
        case 1:
            content.ask = input;
            sendC("Reply to this message answering the question just finished", 2, content);
            break;

        case 2:
        const { join } = require("path");
        const dir = join(__dirname ,'simsimi');
    const pathData = join(dir,'TrainedData.json');
        
        const pathCredit = join(dir, 'TrainedCre.json');
        if(!fs.existsSync(pathCredit)){
          fs.writeFileSync(pathCredit, '[]');
        }
            content.ans = input;
            global.client.handleReply.splice(global.client.handleReply.indexOf(handleReply), 1);
            api.unsendMessage(handleReply.messageID);
            let c = content;
            let b4 = JSON.parse(fs.readFileSync(pathData));
            let creData = JSON.parse(fs.readFileSync(pathCredit));
                creData.push({
                  "Creator's name": by_name,
                  "Creator ID": senderID,
                  "Content Questions": c.ask.toLocaleLowerCase(),
                  "Content of the answer": c.ans,
                  "Time": timeZ
                })
            fs.writeFileSync(pathCredit, JSON.stringify(creData, null,4))
            b4[c.ask.toLocaleLowerCase()] = c.ans.toLocaleLowerCase();
            let data = JSON.stringify(b4, null, 4)
            fs.writeFileSync(pathData, data);
          
            send(`Teaching sim successfully, previews:\in\content: ${c.ask.toLocaleLowerCase()} -> ${c.ans}\n Teacher: ${by_name}\n Time: ${timeZ}`);
            break;
        default:
            break;
    }
}