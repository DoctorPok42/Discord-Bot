const fetch = require("node-fetch");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
  let [query, branch] = args;

  if (!query)
    return message.channel.send("Il faut entrer une requête quand même");
  if (!branch) branch = "master";

  fetch(
    `https://djsdocs.sorta.moe/v2/embed?src=${branch}&q=${encodeURIComponent(
      query
    )}`
  )
    .then((res) => res.json())
    .then((json) => {
      if (!json) return message.channel.send("Désolé mais j'ai pas trouvé :(");

      message.channel.send({ embed: json });
    })
    .catch(() => {
      message.channel.send("J'arrive pas à trouvé la docs");
    });
};

module.exports.help = {
  name: "docs",
};
