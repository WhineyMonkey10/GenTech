const { channel } = require('diagnostics_channel');
const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "This mutes a member",
    execute(message, args) {

    const staffrolesmute = (('840967208200175636', '840967208896167996', '840967209354264627', '840967209354264627', '840980700613836801', '840967210365485078', '840967211278532648', '840967212039012393'))
        if(message.member.roles.cache.has(staffrolesmute)){        const target = message.mentions.users.first();
            if (target) {
    
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Server Ruiner');
    
                let memberTarget = message.guild.members.cache.get(target.id);
    
                if (!args[1]) {
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> has been muted.`);
                    return
                }
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}.`);
    
                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRole.id);
                }, ms(args[1]));
            } else {
                message.channel.send('I could not find that member.');
            }
        }else{ 
            if(message.member.roles.cache.has(staffrolesmute)){
            console.log('Mute worked!');
        }
           else{
            message.channel.send('You do not have sufficient permissions to execute this command.')
           }
            
             
            
             }
            
        }

    }