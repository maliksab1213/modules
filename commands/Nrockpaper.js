module.exports.config = {

    name: "rockpaper",

    version: "1.0.0",

    hasPermssion: 0,

    credits: "fk", 

    description: "freeplay",

    commandCategory: "Game",

    usages: "rockpaper ️✌️ or 👊 or ✋",

    cooldowns: 5,

    dependencies: {

    }

};

module.exports.run = async function ({ event, api, args }) {

    function outMsg(data) {

        api.sendMessage(data, event.threadID, event.messageID);

       }

    if(!args[0]) {

        outMsg("Please enter ️✌️ or 👊 or ✋")

    }

    var turnbot = ["✌️","👊","✋"]

          var botturn = turnbot[Math.floor(Math.random() * turnbot.length)] 

          var userturn = args.join( " ")

          if (userturn == "✌️"||userturn == "👊"||userturn == "✋") {

            if (userturn == turnbot) {

              return outMsg(`Draw\nUser : ${userturn}\nBot : ${botturn} `)

            } else if (userturn == "✌️") {

              if (botturn == "👊") {

                return outMsg(`Bot win\nUser : ${userturn}\nBot : ${botturn} `)

              } else if (botturn == "✋") {

                return outMsg(`User win\nUser : ${userturn}\nBot : ${botturn} `)

            }

          } else if (userturn == "👊") {

            if (botturn == "✋") {

              return outMsg(`Bot win\nUser : ${userturn}\nBot : ${botturn} `)

            } else if (botturn == "✌️") {

              return outMsg(`User win\nUser : ${userturn}\nBot : ${botturn} `)

          }

        } else if (userturn == "✋") {

          if (botturn == "✌️") {

            return outMsg(`Bot win\nUser : ${userturn}\nBot : ${botturn} `)

          } else if (botturn == "👊") {

            return outMsg(`User win\nUser : ${userturn}\nBot : ${botturn} `)

        }

      }

        } else {

          return outMsg("Wrong Format")

        }

}