const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    let member = message.member;
    if (args[0]) member = message.guild.member(message.mentions.users.first());
    let user = member.user;
    var avatar = new MessageEmbed()
    .setColor(client.color.blue)
    .setTimestamp()
    .setDescription(`**Avatar de ${user}** \n **[.png](${user.displayAvatarURL({ format: "png", size: 512 })}) | [.jpg](${user.displayAvatarURL({ format: "jpg", size: 512 })}) | [.webp](${user.displayAvatarURL({ format: "webp", size: 512})}) | [.gif](${user.displayAvatarURL({ format: "gif", size: 512})})**`)
    .setImage(user.displayAvatarURL({dynamic: true}))
    message.channel.send(avatar)
}

module.exports.help = {
    name: "avatar"
};