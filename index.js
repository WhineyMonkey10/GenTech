const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const prefix = '-';

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
        message.channel.send('pong!');
    }
    if(command === 'whineymonkey10'){
        message.channel.send('<@712640311519608943> is pro.')
        console.log('WhineyMonkey10s command got executed!')
    }
    if(command === 'hogefoot'){
        message.channel.send('<@467043574479847435> is pro')
    }
    if(command === 'support'){
        message.channel.send('To receive support you may create a ticket and wait for our staff team to respond.')
    }
});

client.login(token);