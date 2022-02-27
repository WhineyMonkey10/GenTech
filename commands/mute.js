module.exports ={
    name: 'mute',
    description: 'Mute a user in the guild.',
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Server Ruiner');

            let memberTarget = message.guild.members.cache.get(target.id)

            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted.`)
        } else{
            message.channel.send("I couldn't find that user.")
        }
    }
}