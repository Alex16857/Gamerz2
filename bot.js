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

client.login(NDQwODkzNTM0MDM2NDI2NzUy.DdIaVg.sjJG8jX9ePaQH9yaLtL04iire6o);//where BOT_TOKEN is the token of our bot
