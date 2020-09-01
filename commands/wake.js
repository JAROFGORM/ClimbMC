const discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    message.channel.send("yo man, leave me alone, just trying to sleep here and you're bothering me while doing so.");

}

module.exports.help = {
    name: "wake"

}