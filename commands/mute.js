const ms = require('ms');
module.exports ={
    name: 'mute',
    description: 'Mute a user in the guild.',
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Server Ruiner');

            let memberTarget = message.guild.members.cache.get(target.id)
            
            if(!args[1]){
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted.`)
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms((args[1]))}.`)

            setTimeout(function(){
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                
            }, ms(args)[1]);
        } else{
            message.channel.send("I couldn't find that user.")
        }
    }
}