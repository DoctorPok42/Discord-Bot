const config = require("../config");

module.exports = (client, message) => {

    client.config = config;

    if (message.author.bot || message.channel.type === 'dm') {
        return;
        }
    if (!message.channel.permissionsFor(client.user).has('SEND_MESSAGES')) {
        return;
    }
    if (!message.content.startsWith(client.config.prefix)) {
        return;
    }

    let args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    let commande = args.shift();
    let cmd = client.commands.get(commande);

    if (!cmd) {
        return;
    }
        
    cmd.run(client, message, args, config);
};
