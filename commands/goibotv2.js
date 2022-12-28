const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Fk malik",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["😍Je Kahiye Babu", "😘Dil karta he Kass Ke Hug Karlo Tumko", "Muuuaah😘janam", "Hi 😁 Khobsorti ki dokan", "🤨Bari jaldi yad agai meri", "🥺Waiya Kara Lo Mery Nal", "😘Ummmmmaaaaahhhhh", "G Babu😍", "🥺Jan nahi kehna to men naraz ho jana he", "🌹I Lub You😁", "😍Mujhy to jalan horhi he ab tumhri cuteness se", "😙Pehle Papppi", "🤩HUkam", "😘Muah Jan", "😁Kia Hoa Chillana to band karo", "han haan jan sun rha hon😍", "😙Me sabko block karne jarha hon Tumhri waja sy", "😁Smile I am Taking Selfy✌️🤳", "Boldo🥰3n Bar Qabool hai", "🥰I am Curshed After Looking You Beauty", "🥺Pyaal sy bolao"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "love bot") || (event.body.toLowerCase() == "love bot")) {
     return api.sendMessage("Hmm... Bot is too shy to love the bot admin :))", threadID);
   };

    if ((event.body.toLowerCase() == "oh bot") || (event.body.toLowerCase() == "oh bot")) {
     return api.sendMessage("Hurry, I have to serve other boxes :)", threadID);
   };
   
    if ((event.body.toLowerCase() == "does bot love you") || (event.body.toLowerCase() == "bot loves you")) {
     return api.sendMessage("Hi, Bot loves you more than me, love bot <3", threadID);
   };

   if ((event.body.toLowerCase() == "dog bot") || (event.body.toLowerCase() == "dog bot")) {
     return api.sendMessage("What dog just talked bad about me, want to die😠", threadID);
   };
  
   if ((event.body.toLowerCase() == "dmm bot") || (event.body.toLowerCase() == "dmm bot")) {
     return api.sendMessage("Being disobedient to your biological parents, you say that's a broken person", threadID);
   };

   if ((event.body.toLowerCase() == "cursing cmm") || (event.body.toLowerCase() == "undercover cmm")) {
     return api.sendMessage("Being disobedient to your biological parents, you say that's a broken person", threadID);
   };


   if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "sorcerer")) {
     return api.sendMessage("Hi there <3", threadID);
   };

   if ((event.body.toLowerCase() == "tt go mng") || (event.body.toLowerCase() == "tt go mng")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "let's go") || (event.body.toLowerCase() == "let's go")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "tt mng oi") || (event.body.toLowerCase() == "tt mng oi")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
     return api.sendMessage("️Sleep well <3 Wish you all super nice dreams <3", threadID);
   };

   if ((event.body.toLowerCase() == "tt go mn") || (event.body.toLowerCase() == "tt go mn")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "flop over") || (event.body.toLowerCase() == "flop over")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot dthw too") || (event.body.toLowerCase() == "bot dthw over")) {
     return api.sendMessage("️ that's very commendable hihi :>", threadID);
   };
  
   if ((event.body.toLowerCase() == "dm bot") || (event.body.toLowerCase() == "dm bot")) {
     return api.sendMessage("️Swear something to your dad :), you're a kid but you like to be alive :)", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody loves me")) {
     return api.sendMessage("️Come on, the bot loves you <3 <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love the admin bot") || (event.body.toLowerCase() == "does the bot love the admin bot")) {
     return api.sendMessage("Yes, love him the most, don't try to rob me", threadID);
   };
   
   if ((event.body.toLowerCase() == "bot im going") || (event.body.toLowerCase() == "bot im di")) {
     return api.sendMessage("Im cc :))) m stop barking for me, but tell me im :>>", threadID);
   };

   if ((event.body.toLowerCase() == "bot go away") || (event.body.toLowerCase() == "bot cut di")) {
     return api.sendMessage("You're gone, your dad's gone, don't make you speak :))))", threadID);
   };

   if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
     return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "assalamualaikum") || (event.body.toLowerCase() == "asalamualaikum")) {
     return api.sendMessage("walaikum as salam", threadID);
   };

   if ((event.body.toLowerCase() == "veer") || (event.body.toLowerCase() == "veer")) {
     return api.sendMessage("proud on Cammando owner Veer <3 ", threadID);
   };

   if ((event.body.toLowerCase() == "sameer") || (event.body.toLowerCase() == "s9m33r")) {
     return api.sendMessage("proud on Cammando boy sameer <3 ", threadID);
   };

   if ((event.body.toLowerCase() == "zatty") || (event.body.toLowerCase() == "zatty")) {
     return api.sendMessage("proud on cammando boy Zatty <3 ", threadID);
   };

   if ((event.body.toLowerCase() == "vilal") || (event.body.toLowerCase() == "vilal")) {
     return api.sendMessage("proud on cammando boy vilal <3 ", threadID);
   };

   if ((event.body.toLowerCase() == "bilal") || (event.body.toLowerCase() == "bilal")) {
     return api.sendMessage("proud on cammando boy bilal", threadID);
   };

   if ((event.body.toLowerCase() == "fk") || (event.body.toLowerCase() == "devel")) {
     return api.sendMessage("proud on cammando boy fk <3 ", threadID);
   };

   if ((event.body.toLowerCase() == "kami") || (event.body.toLowerCase() == "qamar")) {
     return api.sendMessage("proud on cammando boy Qamar <3", threadID);
   };

if ((event.body.toLowerCase() == "khan lala") || (event.body.toLowerCase() == "khanlala")) {
     return api.sendMessage("proud on Cammando boy khan Lala <3 ", threadID);
   };

if ((event.body.toLowerCase() == "ashu") || (event.body.toLowerCase() == "ashu jutt")) {
     return api.sendMessage("proud on Cammando boy ashu <3 ", threadID);
   };

if ((event.body.toLowerCase() == "jerry") || (event.body.toLowerCase() == "j3rry")) {
     return api.sendMessage("detected dangerXd jerry show <3 ", threadID);
   };

if ((event.body.toLowerCase() == "zain") || (event.body.toLowerCase() == "Zain")) {
     return api.sendMessage("proud on Cammando boy TigerZain <3", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
