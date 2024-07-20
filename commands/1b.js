module.exports.config = {
  name: "image",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "fk",
  description: "",
  usePrefix: true,
  commandCategory: "gen",
  usages: "",
  cooldowns: 2,
};

module.exports.run = async ({ api, event, args }) => {
  const axios = require('axios');
  const fs = require('fs-extra');

  let { threadID, messageID } = event;
  let query = args.join(" ");

  if (!query) return api.sendMessage(" 𝖯𝗅𝖾𝖺𝗌𝖾 𝗉𝗋𝗈𝗏𝗂𝖽𝖾 𝖺 𝗍𝖾𝗑𝗍 𝗍𝗈 𝖼𝗋𝖾𝖺𝗍𝖾 𝗂𝗆𝖺𝗀𝗂𝗇𝖾 𝗂𝗆𝖺𝗀𝖾.", threadID, messageID);

  let path = __dirname + `/cache/polination.png`;

  try {
    const response = await axios.get(`https://arjhil-midjourney.arjhilbard.repl.co/generate-image?prompt=${encodeURIComponent(query)}`);
    const images = response.data.result;

    api.sendMessage("", threadID, messageID);

    if (images.length > 0) {
      const randomIndex = Math.floor(Math.random() * images.length);
      const imageUrl = images[randomIndex];

      const imageResponse = await axios.get(imageUrl, { responseType: "arraybuffer" });
      const imageBuffer = Buffer.from(imageResponse.data, "binary");

      fs.writeFileSync(path, imageBuffer);

      api.sendMessage({
        body: "",
        attachment: fs.createReadStream(path)
      }, threadID, () => fs.unlinkSync(path), messageID);
    } else {
      await api.sendMessage("𝖭𝗈 𝖨𝗆𝖺𝗀𝖾 𝖿𝗈𝗎𝗇𝖽", threadID, messageID);
    }
  } catch (error) {
    await api.sendMessage("𝖤𝗋𝗋𝗈𝗋, 𝖶𝗁𝗂𝗅𝖾 𝖿𝖾𝗍𝖼𝗁𝗂𝗇𝗀 𝗂𝗆𝖺𝗀𝖾.", threadID, messageID);
  }
};
