const Discord = require('discord.js'); //Conectando a biblioteca do discord

module.exports.run = async (client, message, args) => {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    message.channel.send(sayMessage);
}