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

client.on('message', message => {
    if (message.content === 'Start') {
    	message.channel.send('**Hello and welcome to Gamerz. Here I hope you have a good time! First you must read the rules.**');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
