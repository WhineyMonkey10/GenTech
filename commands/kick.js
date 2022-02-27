module.exports ={
    name: 'kick',
    description: 'Kicks a user from the guild.',
    execute(message, args){
    const staffroles = ('840967208200175636', '840967208896167996', '840967209354264627', '840967210365485078', '840967211278532648', '840967212039012393', '840980700613836801')
        if(message.member.roles.cache.has(staffroles)){
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