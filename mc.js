'use strict';

const Discord = require('discord.js');
const config =  require('./config.json');
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
    console.log(`${client.user.username} is logged in!`);
        client.user.setActivity("ClimbMC.com");

});

client.on("message", async message => {
    if(message.author.client) return;
    if(message.channel.type === "dm") return;
    let handle = config.handle;
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let cmdFile = client.commands.get(command.slice(handle.length));
        if(cmdFile) commandFile.run(client, message, args);

})

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

        case "polls":
            client.commands.get('polls').execute(message, args);
        break;

    }
 
});
// Command List

client.on('guildMemberAdd', member => {
const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
if (!channel) return;

channel.send('Welcome to ClimbMC, ${member}');
});

client.login(config.token);