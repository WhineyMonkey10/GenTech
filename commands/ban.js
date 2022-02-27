module.exports ={
    name: 'ban',
    description: 'Bans a user from the guild.',
    execute(message, args){
    const staffroles = ('840967211278532648', '')
        if(message.member.roles.cache.has(staffroles)){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban()
                message.channel.send('Member has been banned.')
            }else{
                message.channel.send('Please specicify a member.')
            }
        } else{
            message.channel.send('You do not have sufficient permissions to execute this command')
        }


        }
    }