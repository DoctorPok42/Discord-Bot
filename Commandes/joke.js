const { MessageEmbed, Discord } = require("discord.js"),
        Client = require("blague.xyz"),
        joker = new Client("YOUR API KEY", { defaultLang: "fr", });

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
