const { MESSAGES } = require("../../util/constants");
const figlet = require("figlet");

module.exports.run = (client, message) => {
  let args = message.content.split(" ").slice(1);

  if (!args[0]) return message.channel.send("Veuillez entrer un texte !");

  msg = args.join(" ");

  figlet.text(msg, function (err, data) {
    if (err) {
      console.log("Probleme de la commande **ascii**");
      console.dir(err);
    }
    if (data.length > 2000)
      return message.channel.send(
        "Ton message est trop long !\n_Maximum 2000 caractères_"
      );

    message.channel.send("```" + data + "```");
  });
};

module.exports.help = {
  name: "ascii",
};
