const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'verify',
    description: "verify",
        execute(message, args){
    
    if(message.member.roles.cache.has('750957892982669383')) {
        switch(args[0]) {
            case 'verify':
                const Embed = new MessageEmbed()
                .setTitle('Discord Verification')
                .setFooter('Presented to you by ClimbMC © 2020')
                .setColor('0x2d8aed')
                .setDescription('To verify your account for usage on our discord, please react to this message with 🟢');
    
                message.author.send(Embed);
                
                break;
            
            }
                let msgArgs = args.slice(1).join(" ");
    
            message.channel.send(msgArgs).then(messageReaction => {
                messageReaction.react("🟢");
    
            })
    
        } else {
            return false;
    
        }
        

    }

}