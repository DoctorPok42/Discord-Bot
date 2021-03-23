const moment = require("moment");

module.exports = (client) => {
  moment.locale("fr");
  console.log(`${client.user.tag} observe les ${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)} utilisateurs et ${client.guilds.cache.size} serveurs`);
  client.channels.cache.get("YOUR CHANNEL PRIVATE ID").send(`Le bot est opérationnel ! (${client.guilds.cache.size})\nLe ${moment(client.online).format("LLL")}`);
}