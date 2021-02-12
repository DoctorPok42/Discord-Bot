module.exports.run = (client, message) => {
    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) { return message.channel.send('Vous n\'avez pas la permission !'); }
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) { return message.channel.send('Le bot n\'a pas la permission !'); }
    if (message.mentions.users.size === 0) { return message.channel.send("Vous devez mentionner un utilisateur !"); }

        let kickMember = message.guild.member(message.mentions.users.first());
        if (!kickMember) { return message.channel.send('Je n\'ai pas trouvé l\"utilisateur !'); }
    
        message.mentions.users.first().send(`Vous êtes kick du serveur **${message.guild.name}** par ${message.author.username}`)
            .then(() => {
                kickMember.kick()
                    .then((member) => {
                        message.channel.send(`${member.user.username} est kick ! Par ${message.author.username}`);
                    })
                        .catch((err) => {
                            if (err) { return console.error(err); }
                        });
            })
                .catch((error) => {
                    if (error) { console.error(error); }
                        kickMember.kick()
                            .then((member) => {
                                message.channel.send(`${member.user.username} est kick ! Par ${message.author.username}`);
                            })
                                .catch((err) => {
                                    if (err) { return console.error(err); }
                                });
                });
};

module.exports.help = {
    name: "kick"
};
