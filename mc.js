const Discord = require('discord.js');
const config =  require('./config.json');
const client = new Discord.Client({disableEveryone: true});
const fs = require('fs');
client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Error: command not found, sorry pal.")
        return;
    }

    jsfile.forEach((f, i) => {
        let cog = require(`./commands/${f}`)
            console.log(`${f} loaded!`)
            client.commands.set(cog.help.name, cog);
    })
});

client.once('ready', async () => {
    console.log(`${bot.user.username} is online in ${guild.name}`)
    bot.user.setActivity("ClimbMC.gg", {type: "PLAYING"});

});

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let handle = config.handle;
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(command.slice(handle.length));
        if(commandFile) commandFile.run(client, message, args);

})

client.login(config.token);