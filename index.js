const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

const token = 'OTQ2ODc3MTIyNzE3Mjk0Njky.YhlGCg.Bmg1Yad45VoayO_KBA85sxjWj3U';

client.on('ready', () => { 
    console.log('Running...'); 
    console.log("STARTED");
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
        } else if(command === 'e'){
            client.commands.get('linked').execute(message, args);
        } else if(command === 'whineymonkey10'){
            client.commands.get('whineymonkey10').execute(message, args);
        } else if(command === 'hogefoot'){
            client.commands.get('hogefoot').execute(message, args);
        } else if(command === 'support'){
            client.commands.get('support').execute(message, args)
        } else if(command === 'sklei'){
            client.commands.get('sklei').execute(message, args)
        }
});

client.login(token);