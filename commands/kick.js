module.exports ={
    name: 'kick',
    description: 'Kick a user from the guild.',
    execute(message, args){
       
        if(message.member.roles.cache.has('840967211278532648')){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick()
                message.channel.send('Member has been kicked.')
            }else{
                message.channel.send('Please specicify a member.')
            }
        } else{
            message.channel.send('You do not have sufficient permissions to execute this command')
        }


        }
    }