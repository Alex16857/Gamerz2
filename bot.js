const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "g-"

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === prefix + 'ping') {
    	message.channel.send('cool');
  	}
});

client.on('message', message => {
    if (message.content === prefix + 'ping') {
    	message.channel.send('cool');
  	}
});     
        
client.on('message', message => {
    if (message.content === prefix + 'pong') {
    	message.channel.send('ping');
  	}
});

client.on('message', message => {
    if (message.content === prefix + 'Start') {
    	message.channel.send("**Hello and welcome to Gamerz. Here I hope you have a good time! First you must read the rules.\n#1 Don't spam outside of #spam\n#2 Don't advertise outside of #ads\n#3 Don't ask for roles\n#4 Only use the !rank command in #rank-checker\n#5 Don't be rude to @Owner @OwnerAssistant @Head Admin @Head Admin Assistant @Admin @Trail Admin @Pro Gamer @Head Mod @Mod @Trial Mod\n#6 Don't do bot commands outside of #bot-commands\n#7 Don't deathbattle outside of #arena\n#8 If you introduce yourself more than once you get a warning\n#9 Only introduce yourself in #introduce-yourself \n#10 Please Introduce yourself so we can customize your roles\n#11 There is no NSFW. This is a gaming server. **");
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
