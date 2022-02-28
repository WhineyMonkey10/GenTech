module.exports ={
    name: 'ban',
    description: 'Bans a user from the guild.',
    execute(message, args){
        const staffroleskick = ('840967208200175636', '840967208896167996', '840967209354264627', '840967209354264627', '840980700613836801', '840967210365485078', '840967211278532648')
        if(message.member.roles.cache.has(staffroleskick)){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban()
                message.channel.send('Member has been banned.')
            }else{
                message.channel.send('Please specicify a member.')
            }
        } else{
            message.channel.send('You do not have sufficient permissions to execute this command.')
        }


        }
    }