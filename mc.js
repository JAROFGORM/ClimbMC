const Discord = require('discord.js');

const Client = new Discord.Client;

Client.once('ready', async () => {
    console.log(`${bot.user.username} is online in ${guild.name}`)
    bot.user.setActivity("ClimbMC.gg", {type: "PLAYING"});

});

Client.login(config.token);