module.exports = {
    name: 'kick',
    aliases: ['k', 'kill'],
    description: "This command kicks a member!",
    permissions: ["KICK_MEMBERS"],
    execute(client, message, args, Discord){
      var doneEmbed = new Discord.MessageEmbed()
 .setColor('GREEN')
 .setDescription('User has been kicked.')
 
      var bruhEmbed = new Discord.MessageEmbed()
 .setColor('RED')
 .setDescription('Make sure you mentioned someone.')

        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send(doneEmbed).then(msg => {
    setTimeout(() => message.channel.bulkDelete(2), 5000)
  })
  .catch(console.error);
        }else{
            message.channel.send(bruhEmbed).then(msg => {
    setTimeout(() => message.channel.bulkDelete(2), 5000)
  })
  .catch(console.error);
        }
    }
}