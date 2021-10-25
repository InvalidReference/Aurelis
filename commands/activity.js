const {MessageEmbed} = require("discord.js");

module.exports = {
  name: "activity",
  aliases: ['pls'],
  description: "bro",
  permissions: ["ADMINISTRATOR"],
  execute(client, message, args, Discord){
    client.user.setActivity('V.01', { type: 'PLAYING' });
    const activity = client.user.activity
    var bruhbruhembed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setDescription(`Activity set to ${activity}`)
    .setFooter('pls help me')


    message.channel.send(bruhbruhembed);
    
  }
}