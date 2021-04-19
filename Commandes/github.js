const { MessageEmbed } = require("discord.js"),
  fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {
  const res = await fetch(
    "https://api.github.com/repos/DoctorPok42/Moderation-Bot"
  );
  const json = await res.json();

  const embed = new MessageEmbed()
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(
      "[" + "CLICK_HERE" + "](https://github.com/DoctorPok42/Moderation-Bot)"
    )
    .addField("Stars", json.stargazers_count, true)
    .addField("Forks", json.forks_count, true)
    .addField("LANGUAGE", json.language, true)
    .addField(
      "OWNER",
      "[" + json.owner.login + "](" + json.owner.html_url + ")"
    )
    .setImage(json.owner.avatar_url);

  message.channel.send(embed);
};

module.exports.help = {
  name: "github",
};
