const { MessageEmbed, Discord } = require("discord.js");
const { MESSAGES } = require("../../util/constants");
const { Client } = require("blague.xyz");
const joker = new Client("YOUR API KEY", {
  defaultLang: "fr", // The default language for jokes and fml
});
module.exports.run = (client, message, args) => {
  joker.randomJoke().then((joke) => {
    const embed = new MessageEmbed()
      .setTitle("🃏 Une blague ? C'est parti !!")
      .setDescription(joke.toDiscordSpoils())
      .setFooter(`id : ${joke.id}`)
      .setTimestamp();
    message.channel.send(embed);
  });
};

module.exports.help = {
  name: "joke",
};
