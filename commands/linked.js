module.exports ={
    name: 'link',
    description: 'Corrects user whilst trying to link.',
    execute(message, args){
        message.channel.send('To link your account please DM <@930141476019662888>. Also, delete your message if it contains your linking code, since people could link to Minecraft as you.');
    }
}