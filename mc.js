'use strict';

const Discord = require('discord.js');
const config =  require('./config.json');
const {MessageEmbed} = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const fs = require('fs');
const { prefix } = require('./config.json');
client.commands = new Discord.Collection();

// Command Handler (begin)
fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Error: commands not found, sorry pal.")
        return;
    }

    jsfile.forEach((f, i) => {
        let cog = require(`./commands/${f}`)
            console.log(`${f} is installed.`)
            client.commands.set(cog.help, cog);
    })
});

// Command Handler (end)

client.once('ready', async () => {
    console.log(`${client.user.username} is logged in!`);  //logs bot once it is online.
        client.user.setActivity("ClimbMC.com"); //sets bot's activity to 'Playing ClimbMC.com'

});

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

// Command List
client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");
 
    switch (args[0]) {
 
        case "wake":
            client.commands.get('wake').execute(message, args);
        break;
 
        case "store":
            client.commands.get('store').execute(message, args);
        break;

        case "poll":
            client.commands.get('poll').execute(message, args);
        break;

        case "clear":
            client.commands.get('clear').execute(message, args);
        break;

        case "verify":
            client.commands.get('verify').execute(message, args);
        break;

    }
 
});
// Command List (end)

client.on('guildMemberAdd', member => {
const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
if (!channel) return;

channel.send(`Welcome to ClimbMC, ${member}`);
});

client.login(config.token);

// 750957892982669383 (unverified user)