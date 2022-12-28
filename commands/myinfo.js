module.exports.config = {
    name: "myinfo",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "fk", 
    description: "View information of facebook users",
    commandCategory: "info",
    usages: "",
    cooldowns: 3
    
};
module.exports.run = async({api,event,args}) => {
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const axios = global.nodemodule['axios'];  

    if(!args[0]){
    if(event.type == "message_reply") { uid = event.messageReply.senderID }
    else uid = event.senderID;
   const res = await api.getUserInfoV2(event.senderID);  
    var gender = res.gender == 'male' ? "Male" : res.gender == 'female' ? "Female" : "Not public";
    var birthday = res.birthday ? `${res.birthday}` : "No information found";
    var love = res.relationship_status ? `${res.relationship_status}` : "No information found"
    var callback = () => api.sendMessage({body:`»Name: ${res.name}\n»UID: ${uid}\n»Follow: ${res.follow}\n»Sex: ${gender}\n» Birthday: ${birthday}\n»Relationship: ${love}\n»URL profile: ${res.link}`,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());
   } 
}