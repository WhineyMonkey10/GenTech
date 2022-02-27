module.exports ={
    name: 'ticket',
    aliases: [],
    permissions: [],
    description: 'Open a ticket.',
    async execute(message, args, cmd, client, discord){
        const channel = await message.guild.channels.create(`ticket ${message.author.tag}`);
        channel.setParent('947146710969380904');

        channel.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false
        });

        channel.updateOverwrite(message.author, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
        });

        const reactionMessage = await channel.send('Thank you for contacting support.');

        try{
            
            await reactionMessage.react("🔒");
            await reactionMessage.react("🛑");


        }catch(err){
            channel.send('Error sending Emojis');
            throw err;
        }

        const collector = reactionMessage.create.createReactionCollector((reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission('KICK_MEMBERS'),
        { dispose: true }
        );

        collector.on('collect', (reaction, user) => {
            switch (reaction.emoji.name){
                case "🔒":
                    channel.updateOverwrite(message.author, {SEND_MESSAGES: false});
                    break;
                case "🛑":
                    channel.send('This channel will be deleted in five seconds.');
                    setTimeout(() => channel.delete(), 5000);
                    break;

            }
        });

        message.channel.send(`Your ticket has been created at: ${channel}`).then((msg) => {
            setTimeout(() => msg.delete(), 7000)
            setTimeout(() => message.delete(), 3000);
        
        }).catch((err) => {
            throw err;
        });
    },
};