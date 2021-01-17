const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message) => {

    const msg = await message.channel.send("Ping Ping Ping ...");

    const me = new MessageEmbed()
    .setTitle("Pong !")
    .addField("Latence du bot :", msg.createdTimestamp - message.createdTimestamp + " ms", true)
    .addField("Latence de l'API :", Math.round(client.ws.ping) + " ms", true)
    .setColor(client.color.blue)
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setTimestamp();
  
    msg.delete();
  
    message.channel.send(me);

};

module.exports.help = {
    name: "ping"
};
