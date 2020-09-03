const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'poll',
    description: "poll",
        execute(message, args){

            switch(args[0]) {

            case "poll":    
                if(message.member.roles.cache.has('750133226218979348')) { // sees if Sender has 'Founder' role, if Sender does, it executes Embed.
                
                if(!args[0]) {
                    const Embed = new MessageEmbed()
                    .setColor(0xf2dc49)
                    .setTitle('Poll Template')
                    .setDescription('!poll <question> :P');
                    message.channel.send(Embed);
                    message.delete().catch(console.error);
                    break;
                }
                
                if(!args[1]) {
                    
                    const Embed2 = new MessageEmbed()
                    .setColor(0xf2dc49)
                    .setTitle("📜" + " " + "**" + " " + 'Poll')
                    .setDescription()
                    .setFooter('React to vote in poll.');
                    message.channel.send(Embed2);
                    break;
                }
            
                let msgArgs = args.slice(1).join(" ");

                message.channel.send(msgArgs).then(messageReaction => {
                    messageReaction.react("🟢");
                    messageReaction.react("🔴");

                    message.delete().catch(console.error);
                })

             } else { // If Sender doesn't have role, it returns false and proceeds to not output anything.
            return false;
            }
            
            break;

        }
    }

}