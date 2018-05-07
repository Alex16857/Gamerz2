const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NDQwODkzNTM0MDM2NDI2NzUy.DdIqmA.RFSrSz1ZOkS1aF4p-4Xf0Xc6BGA);//where BOT_TOKEN is the token of our bot 
