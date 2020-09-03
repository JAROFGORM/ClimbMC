const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'store',
    description: "Store Embed for ClimbMC",
        execute(message, args){

        if(message.member.roles.cache.has('750133226218979348')) { // sees if Sender has 'Founder' role, if Sender does, it executes Embed.
            const Embed = new MessageEmbed()
            .setColor(0x2d8aed)
            .setTitle('ClimbMC Store')
            .setDescription(':P');

            if(!args[1]) {
                message.channel.send(Embed);
                message.delete().catch(console.error);
            }

        } else { // If Sender doesn't have role, it returns false and proceeds to not output anything.
            return false;

        }

    }


}