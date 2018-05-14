const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('cool');
  	}
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('cool');
  	}
});     
        
client.on('message', message => {
    if (message.content === 'pong') {
    	message.channel.send('ping');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
