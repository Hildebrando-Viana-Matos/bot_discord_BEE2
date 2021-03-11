const Discord = require('discord.js'); //Conectando a biblioteca do discord
const client = new Discord.Client(); //Conexão ao client
const config = require('./config.json');

client.on('guildCreate', guild => {
    console.log(`O bot entrou no servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
})

client.on('guildDelete', guild => {
    console.log(`O bot BANIDO do servidor: ${guild.name} (id: ${guild.id})`);
})

client.on('message', msg => {
    if(msg.content === 'Fiat Uno') {
        msg.reply("MELHOR CARRO");
    }
})

client.on("message", async message => {
    if(message.author.bot) return; //Ingnorar mensagens e de outros bot
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return; //Ignorar mensagens que iniciem com o prefixo do bot
    if(message.content.startsWith(`<@!${client.user.id}`) || message.content.startsWith(`<@${client.user.id}`)) return;

    let args = message.content.split(" ").slice(1);
    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);
    try{
        let commandFile = require(`./commands/${command}.js`);
        delete require.cache[require.resolve(`./commands/${command}.js`)];
        return commandFile.run(client, message, args);
    } catch (err) {
        console.log("Erro: " + err)
    }
});

client.on("guildMemberAdd", async (member) => {
    let guild = client.guilds.cache.get("689267057266655248"); //Id do servidor
    let channel = client.channels.cache.get("818897246011523084"); //Id do canal
    
    if (guild != member.guild) {
        return console.log("Você não é da tropa");
    } else {
        var lista = [
            'https://media.giphy.com/media/dvx3Oy3RXKAWQ4ZqJh/giphy.gif',
            'https://media.giphy.com/media/l4FGpPki5v2Bcd6Ss/giphy.gif',
            'https://media.giphy.com/media/JRE3AvLsSRXg360F6l/giphy.gif',
            'https://media.giphy.com/media/xjZtu4qi1biIo/giphy.gif',
            'https://media.giphy.com/media/k59yYusdGXlPG/giphy.gif',
            'https://media.giphy.com/media/hTh9bSbUPWMWk/giphy.gif',
            'https://media.giphy.com/media/ZHvEU59xzvr1DK4iOg/giphy.gif',
            'https://media.giphy.com/media/mEsqfG9Zbuj7CDsroa/giphy.gif',
            'https://media.giphy.com/media/3o85xGocUH8RYoDKKs/giphy.gif'
        ];
    
        var randi = lista[Math.floor(Math.random() * lista.length)];
        let embed = new Discord.MessageEmbed()
            .setColor('#36175E')
            .setAuthor(member.user.tag, member.user.displayAvatarURL())
            .setTitle(`FAVELA TÁ VENCENDO!!! Bem-vindo(a) ${member.user.tag}`)
            .setImage(randi)
            .setDescription(`${member.user} aprovite esse servidor dos Deuses do Fiat Uno ou do Pálio(Não sei em quem você acredita) que se chamado por muitos de ${guild.name}. Faça amigos, seja educado e me use como você quiser, novamente, BEM-VINDO(A)`)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
            .setFooter(`Id do novato(a): ${member.user.id}`)
            .setTimestamp();
        await channel.send(embed)
    }
})

client.on('ready', () => {
    let activities = [
        'SASAGUEYOOOOOO',
        `Utilize ${config.prefix}help para obter ajuda.`,
        'Uma noite em campo grande',
        'nada',
        'A vida é triste',
        'CHAMAA',
        'Mano cadê meu pai??',
        'PARA DE OLHAR MINHA VIDA!!, EU SOU UM BOT LIVRE!!',
        'Corpo moreno, sarado, da cor do pecado',
        'VOU PARAR BEBER - Piupiu'
    ]
    i=0;

    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "LISTENING"
    }), 1000 * 60 * 60);
    console.log(`It's time, O bot foi iniciado em ${client.guilds.cache.size} servidores, ${client.channels.cache.size} canais com mais de ${client.users.cache.size} usuários`);
});

client.login(config.token); //Fazendo o bot logar