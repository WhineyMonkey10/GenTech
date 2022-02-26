module.exports ={
    name: 'support',
    description: 'Sends how to receive support.',
    execute(message, args){
        message.channel.send('To receive support you may create a ticket and wait for our staff team to respond.');
    }
}