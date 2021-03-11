const Discord = require('discord.js'); //Conectando a biblioteca do discord

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MENAGE_MESSAGES")){
        return message.reply("Você não tem permissões suficientes,e quer saber mais??? Você nunca vai ter. LHE FALTA ÓDIO E METAS EM SUA VIDA!!");
    }
    const deleteCount = parseInt(args[0], 10);

    if(!deleteCount || deleteCount <= 1 || deleteCount >= 100) {
        return message.reply("SÓ ATÉ 100 FIÃO!!! Quer pagar logo o servidor todo???")
    }

    const fetched = await message.channel.messages.fetch({ limit: deleteCount + 1});
    message.channel.bulkDelete(fetched)
    message.channel.send(`Estão tentando apagar uma história divina!! ${args[0]} mensagens foram limpadas!!`)
    .catch(erro => console.log(`Não foi possível deletar mensagens devido a: ${error}`))
}