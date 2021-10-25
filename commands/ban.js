module.exports = {
    name: 'ban',
    aliases: ['b', 'murder'],
    description: "This command kicks a member!",
    permissions: ["BAN_MEMBERS"],
    execute(client, message, args, Discord){
      var bannedEmbed = new Discord.MessageEmbed()
 .setColor('GREEN')
 .setDescription('User has been banned.')

 var notbannedEmbed = new Discord.MessageEmbed()
 .setColor('RED')
 .setDescription('Make sure you mentioned a member.')
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send(bannedEmbed).then(msg => {
    setTimeout(() => message.channel.bulkDelete(2), 5000)
  })
  
  .catch(console.error);
        }else{
            message.channel.send(notbannedEmbed).then(msg => {
    setTimeout(() => message.channel.bulkDelete(2), 5000)
  })
  .catch(console.error);
        }
    }
}