const Discord = require('discord.js'); //Conectando a biblioteca do discord

module.exports.run = async (client, message, args) => {
    let value = Number(args[0]);
    var rand = Math.floor(Math.random() * value + 1);
    let color = "#FFFFFF";
    let phrase = "Erro";

    if (rand >= value*0.6) {
        color = "#0CE823";
        phrase = "BOOOOOAAAAA, eu acho";
    }else if(rand < value*0.6 && rand >= value*0.3) {
        color = "#EAFF0D";
        phrase = "Uiii, na trave";
    }else {
        color = "#D61A13";
        phrase = "Não é você, sou eu!!";
    }

    let avatar = message.author.displayAvatarURL({format: "png"});
        const embed = new Discord.MessageEmbed()
            .setTitle(`${message.author.tag} tirou ${rand}`)
            .setColor(color)
            .setDescription(phrase)
            .setTimestamp()
            .setThumbnail(avatar)
            .setAuthor(message.author.tag, avatar);
        await message.channel.send(embed)
}
