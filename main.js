const { Client, Collection} = require('discord.js'),
client = new Client({ partials: ["MESSAGE", "CHANNEL"]});
client.commands = new Collection();
const fs = require('fs');
const config = require("./config.js");

client.config = config;
client.color = require("./Storage/color.json");

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) {
            return console.log('Pas de commandes trouvée dans le dossier Commandes')
        }
        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} (commandes) => good`);
            client.commands.set(commande.help.name, commande);
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f} (event) => good`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});

client.on('ready', (client) => {
    console.log(`Bot lancé !\nPrésent sur ${client.guilds.cache.size} serveurs`)
    client.user.setActivity({name: config.activity, type: 'PLAYING'}); //pour avoir la liste de tous les type disponible aller ici https://discord.js.org/?source=post_page#/docs/main/v12/typedef/ActivityType
})

client.login(client.config.TOKEN);
