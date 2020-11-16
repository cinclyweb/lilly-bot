const jimp = require("jimp");
const path = require("path");
const fs = require("fs");

module.exports = {
  name: "notstonks",
  description: "Crie seu meme Not Stonks!!",
  args: true,
  guildOnly: true,
  economy: false,
  premium: false,
  fun: true,
  userPermissions: "Nenhuma",
  lillyPermissions: "Nenhuma",
  aliases: [],
  usage: "$notstonks (frase)",
  async execute(msg, args) {
    jimp
      .read(
        path.join(__dirname, "..", "..", "..", "assets", "images", "notstonks.png")
      )
      .then(async (stonks) => {
        jimp
          .loadFont(jimp.FONT_SANS_32_BLACK)
          .then(async (font) => {
            let message = args.join(" ").replace('\n', ' ');
            const widthText = jimp.measureText(font, message);
            const widthImage = stonks.getWidth();
            const imageFormat = stonks.getExtension()
            const filename = `${this.name}_${msg.author.username}_${Date.now()}.${imageFormat}`;
            const pathImages = path.join(
              __dirname,
              "..",
              "..",
              "..",
              "assets",
              "images",
              "temp"
            );

            if (widthText < widthImage) {
              stonks.print(font, 10, 10, message);
              stonks.writeAsync(path.join(pathImages, filename));
              return msg
                .reply("", {files: [path.join(pathImages, filename)]})
                .then(() => fs.unlink(path.join(pathImages, filename), () => {}));
                
            } else {
                let count = 0;
                let height = 10;
                let newMessage = "";
                for (word of message.split(" ")) {
                  count += 1;

                  newMessage += word + " ";
                  const text = jimp.measureText(font, newMessage);

                  if (
                    widthImage <= text ||
                    count % 5 == 0 ||
                    word == message.split(" ")[message.split(" ").length - 1]
                  ) {
                    stonks.print(font, 10, height, newMessage);
                    height += 30;
                    newMessage = "";
                  }
                }

                stonks.writeAsync(path.join(pathImages, filename));
                return msg.reply("", {files: [path.join(pathImages, filename)]})
                  .then(() => fs.unlink(path.join(pathImages, filename), () => {}));
            }
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  },
};
