module.exports.config = {
    name: "fbpost",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "fk",
    description: "",
    commandCategory: "Edit",
    usages: "[text]",
    cooldowns: 10,
    dependencies: {
        canvas: "",
        axios: "",
        "fs-extra": "",
    },
};

module.exports.wrapText = (ctx, text, maxWidth) => {
    return new Promise((resolve) => {
        if (ctx.measureText(text).width < maxWidth) return resolve([text]);
        if (ctx.measureText("W").width > maxWidth) return resolve(null);
        const words = text.split(" ");
        const lines = [];
        let line = "";
        while (words.length > 0) {
            let split = false;
            while (ctx.measureText(words[0]).width >= maxWidth) {
                const temp = words[0];
                words[0] = temp.slice(0, -1);
                if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
                else {
                    split = true;
                    words.splice(1, 0, temp.slice(-1));
                }
            }
            if (ctx.measureText(`${line}${words[0]}`).width < maxWidth)
                line += `${words.shift()} `;
            else {
                lines.push(line.trim());
                line = "";
            }
            if (words.length === 0) lines.push(line.trim());
        }
        return resolve(lines);
    });
};
module.exports.circle = async (image) => {
  const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}
module.exports.run = async function ({
    api,
    event,
    args,
    Users
}) {
    const fs = global.nodemodule["fs-extra"];
    const axios = global.nodemodule["axios"];
    let {
        senderID,
        threadID,
        messageID
    } = event;
    if(!fs.existsSync(__dirname+`Roboto-Thin.ttf`)) { 
      let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=1ZhvdAOzugHMVWP9OQuJXRD_Yi2ZeCB-M&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+`Roboto-Thin.ttf`, Buffer.from(getfont, "utf-8"));
    };
    const {
        loadImage,
        createCanvas
    } = require("canvas");
    let path = __dirname + "/cache/comment.png";
    let pathAvata = __dirname + `/cache/avtuserrrrrrrr.png`;
    let pathTick = __dirname + `/cache/tickxanh.png`;
    var text = args.join(" ");
    if (event.type == "message_reply") {
        text = event.messageReply.body
    }
    if (!text)
        return api.sendMessage("Enter the content or reply to the content you comment", threadID, messageID);
    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    let tick = (await axios.get(`https://nhanhoa.com/uploads/attach/1618816460_tich_xanh_facebook.png`, { responseType: 'arraybuffer' })).data;
    let bg = (
        await axios.get(`https://i.imgur.com/4CbBIYI.png`, {
            responseType: "arraybuffer",
        })
    ).data;
    fs.writeFileSync(path, Buffer.from(bg, "utf-8"));
    fs.writeFileSync(pathAvata, Buffer.from(getAvatarOne, 'utf-8'));
    fs.writeFileSync(pathTick, Buffer.from(tick, 'utf-8'));
    avataruser = await this.circle(pathAvata);
    let imgB = await loadImage(path);
    let baseAvata = await loadImage(avataruser);
    let baseTick = await loadImage(pathTick);
    let canvas = createCanvas(imgB.width, imgB.height);
    let ctx = canvas.getContext("2d");
    const Canvas = global.nodemodule["canvas"];
    var namee = (await Users.getData(senderID)).name
    ctx.drawImage(imgB, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(baseAvata, 11, 10, 42, 42);
    
    Canvas.registerFont(__dirname+`Roboto-Thin.ttf`, {
        family: "Roboto"
    });
    ctx.font = "100 17px Roboto";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "start";
    fontSize = 17;
    ctx.fillText(namee, 60, 25)
    ctx.drawImage(baseTick, 170, 14, 13, 13)
    

    ctx.font = "100 16px Roboto";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "start";
    fontSize = 17;
    while (ctx.measureText(text).width > 2600) {
        fontSize--;
        ctx.font = `${fontSize}px Arial`;
    }
    const lines = await this.wrapText(ctx, text, 465);
    ctx.fillText(lines.join("\n"), 15, 73);
    ctx.beginPath();
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(path, imageBuffer);
    return api.sendMessage({
            attachment: fs.createReadStream(path)
        },
        threadID,
        () => fs.unlinkSync(path),
        messageID
    );
};