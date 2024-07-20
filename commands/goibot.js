const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Fk malik",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 7000,
};
let cooldowns = {};

module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  // check cooldown
  if (cooldowns[event.senderID] && (Date.now() - cooldowns[event.senderID]) < module.exports.config.cooldowns) {
    return;
  }

  var tl = ["Jii MeRi JaN😗", "🥺Tum Etn Cute Kyun Ho YaaL", "😘Aww Mely Baby", "Jiie Shona😍", "Lubli You Babu😗", "Hamto😳Fida HoGy apke husan pe", "😘UmmmAaaAh", "Apko😉Miss kar rh tha men", "Je 😘 Darling", "Je Babu😋", "Uufff Payary Logon Ka Payara masg😍", "Yes my love😘", "Apki Khobsorti key samne to Chand Bhi Phika par jy Jnan😍", "Kya tareef kron apki😍mery pas Alfazo ki kami hai", "Jee Jaan Hukam Kijye♥️", "😍Akhir Raaz Kia He Tumhri Cutnes ka", "Jee Mely Babu😋", "😉Date pe chalna heto btao", "😍Tumsy Zyda payara to yaha pe or koi nai hau", "Aww Mujhy Bolya 😍", "😘Ummmah", "Ufff tumhe muskrata dekhne ke bd to mujhy nend hi nai ati😍", "🙈Kaya Hoa Je", "🥺Han Parpoz Kardo ab", "😗Tumhe kessi leni nai ati na ao me sekhata hon", "Je Meri jan😘", "Je mela babu😍", "G HuKam kejye Sarkar <3 ", "Han G Agay Ap ♥️.", "Je Janu Ummaah :3", "Farmaiye?", "Yes Darling😘", "Je Babu?", "Bot nai jan bolo Mujhy😉 ", "🙈Pehly Chummi", "Han Bolo?", "Ummah UmmaahUmmmaahh 😘", "Lubli U Babu🥰", "🙈🙈🙈🙈", "Kabhi aona mere Dil men😘", "Kissimesi Chiye 😉", "Je Jan Kahen😍", "Lubli You Babu😘", "😍Hye Ap HaseenHasti", "Ji Boliye Babu😗", "Agy Janu Je😘", "😗Jii Meri Jan", "Ummah😘Babu", "😉Jee Shona", "Sadqy Jaon Apni Janu Py😘", "Ummmmmaah😘😘", "Jan Apky Bgair to Dil hi nai lagta mera😘", "Awww My Lub😍", "Je Babu Ji😘", "Aona LongDrive Pe chlen😍", "Jan😍Ek Bar phir Kaho Na", "😉Sirf tum Aur Men", "🥺Wayya karalo mery Nal", "Ary Yahin Hon Jan😗", "apky any sy Dil Gardan Gardan Hogya😘", "Ummmaah Janu je 😘😘😘", "Aww Etne pyaly ho ap dil karta he chom lon apko😜", "🙈etna pyar sei bolty ho jan", "Horri maiya 😍etne cute ho ap", "Barry barry haseen dekhe lekin😍apki bat hi alag he jan😘", "😉Ji Baby", "Je Darling🙈", "Tumhra msg bhi tumhri tarhan sweet he😍", "Ally Babu😍Kahan the ap", "😉Apko To Dil men rkhne ka dil krta he", "😍Babu Kuch Kahen Na", "Ummmaah 😍 Liippi pe😘", "Je Babu😘Bolo", "Janu😉 You are so cute really", "Aww My Lovely Jan😘", "Ji Hukam Kren Babu😍", "Papi lelo apki😘", "Jii Janu😉", "Aww Apna Bana Lo Tumhe🙈😘", "Hyee 😍Mujhy Kuch kuch horha he", "😍Je Kahiye Babu", "😘Dil karta he Kass Ke Hug Karlo Tumko", "Muuuaah😘janam", "Hi 😁 Khobsorti ki dokan", "🤨Bari jaldi yad agai meri", "🥺Waiya Kara Lo Mery Nal", "😘Ummmmmaaaaahhhhh", "G Babu😍", "🥺Jan nahi kehna to men naraz ho jana he", "🌹I Lub You😁", "😍Mujhy to jalan horhi he ab tumhri cuteness se", "😙Pehle Papppi", "🤩HUkam", "😘Muah Jan", "😁Kia Hoa Chillana to band karo", "han haan jan sun rha hon😍", "😙Me sabko block karne jarha hon Tumhri waja sy", "😁Smile I am Taking Selfy✌️🤳", "Boldo🥰3n Bar Qabool hai", "🥰I am Curshed After Looking You Beauty", "🥺Pyaal sy bolao"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "love bot") || (event.body.toLowerCase() == "love bot")) {
     return api.sendMessage("Hmm... Bot is too shy to love the bot admin :))", threadID);
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
     return api.sendMessage("COMMANDO KING ASHU JUTT ", threadID);
   };

if ((event.body.toLowerCase() == "twinkle") || (event.body.toLowerCase() == "groot")) {
     return api.sendMessage("proud on Cammando boy Twinkle <3 ", threadID);
   };

if ((event.body.toLowerCase() == "jack") || (event.body.toLowerCase() == "jeck")) {
     return api.sendMessage("proud on Cammando boy jack <3 ", threadID);
   };

if ((event.body.toLowerCase() == "jerry") || (event.body.toLowerCase() == "j3rry")) {
     return api.sendMessage("THE C0MM0ND0 K1NG R9MI J9TTUK J3RRY-SH9W ", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    // set cooldown
    cooldowns[event.senderID] = Date.now();
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }