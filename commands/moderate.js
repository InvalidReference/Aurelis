const Discord = require('discord.js')
const randomString = require('randomstring')

module.exports = {
     name: 'moderate',
     aliases: ['mod', 'nick'],
     description: "changes someones name to moderated nickname i guess",
     permissions: ["KICK_MEMBERS"],
     execute(client, message, args){

 var embed = new Discord.MessageEmbed()
 .setColor('RED')
 .setDescription('You need to mention someone.')

 var doneEmbed = new Discord.MessageEmbed()
 .setColor('GREEN')
 .setDescription('Successfully changed their nickname!')

 var errorEmbed = new Discord.MessageEmbed()
 .setColor('RED')
 .setDescription('Failed to change this user\'s nickname.')

 var user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.channel.send(embed).then(msg => {
    setTimeout(() => message.channel.bulkDelete(2), 5000)
  })
  .catch(console.error);
   
    function generateRandomString(length){
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var random_string = '';
        if(length > 0){
          for(var i=0; i < length; i++){
              random_string += chars.charAt(Math.floor(Math.random() * chars.length));
          }   
        }
        return random_string  
      }
      const random = generateRandomString(6)
      const nickname = `Moderated Nickname ${random}`
    try {
         message.guild.member(user).setNickname(`${nickname}`)
         message.channel.send(doneEmbed).then(msg => {
    setTimeout(() => message.channel.bulkDelete(2), 5000)
  })
  

  .catch(console.error);
        
} catch(err) {
    message.channel.send(errorEmbed).then(msg => {
    setTimeout(() => message.channel.bulkDelete(2), 5000)
  })
 
  .catch(console.error);
}
    
}
}