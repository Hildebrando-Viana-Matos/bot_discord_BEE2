const Discord = require('discord.js'); //Conectando a biblioteca do discord

module.exports.run = async (client, message, args) => {
    var list = [
        'https://media.giphy.com/media/JFmIDQodMScJW/giphy.gif',
        'https://media.giphy.com/media/xdXIoBwYnBC0w/giphy.gif',
        'https://media.giphy.com/media/Ka2NAhphLdqXC/giphy.gif',
        'https://media.giphy.com/media/7z1xs4Fl9Kb8A/giphy.gif',
        'https://media.giphy.com/media/7QkZap9kQ1iy4/giphy.gif',
        'https://media.giphy.com/media/dP8ONh1mN8YWQ/giphy.gif',
        'https://media.giphy.com/media/uSHX6qYv1M7pC/giphy.gif',
        'https://media.giphy.com/media/COhjzNhZAeDmw/giphy.gif',
        'https://media.giphy.com/media/26FfieRGHkfYeDdZu/giphy.gif',
        'https://media.giphy.com/media/l4FsxDD7LwInTgy5O/giphy.gif',
        'https://media.giphy.com/media/u58KmCjvEMfEQ/giphy.gif',
        'https://media.giphy.com/media/UtzGYzqVYTz6o/giphy.gif',
        'https://media.giphy.com/media/3ohs7IJJ3vnbFJBIeA/giphy.gif'
    ];

    var rand = list[Math.floor(Math.random() * list.length)];

    let user = message.mentions.users.first() || client.users.cache.get(args[0]);
    if(!user) {
        return message.reply("NÃO TEM COMO BEIJA O VENTO, vai por mim, já tentei. Mencione um usuário válido para dar aquele beijo SUADO!!!");
    }
    
    let avatar = message.author.displayAvatarURL({format: "png"});
        const embed = new Discord.MessageEmbed()
            .setTitle('BEIJOCA')
            .setColor('#DB2D25')
            .setDescription(`EU SHIPOOO!!! ${message.author} **DEU UMA BEIJOCA** ${user}!! :heart: `)
            .setImage(rand)
            .setTimestamp()
            .setThumbnail(avatar)
            .setFooter('Se quiser... Chama nois pro casamento')
            .setAuthor(message.author.tag, avatar);
        await message.channel.send(embed)
}
