const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('***
#1 Don't spam outside of #spam
#2 Don't advertise outside of #ads
#3 Don't ask for roles
#4 Only use the !rank command in #rank-checker
#5 Don't be rude to @Owner @Admin  @Pro Gamer @Mod 
#6 Don't do bot commands outside of #bot-commands
#7 Don't deathbattle outside of #arena
#8 @everyone If you introduce yourself more than once you get a warning  
#9 @everyone  only introduce yourself in #introduce-yourself 
#10 Please Introduce yourself so we can customize your roles
#11 There is no NSFW. This is a gaming server.
~Arekkusu
Server Owner
***');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
