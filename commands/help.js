module.exports = {
    name: 'help',
    aliases: ['commands'],
    description: 'Bot commands',
    permissions: ["KICK_MEMBERS"],

    execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#2f96ad')
        .setTitle('Help')
        .addFields(
            { name: 'Mute', value: '-mute @user <optional time in ms>'},
            { name: 'Unmute', value: '-unmute @user'},
            { name: 'Kick', value: '-kick @user'},
            { name: 'Ban', value: '-ban @user'},
            { name: 'Moderate', value: '-moderate @user'},
            { name: 'Clear', value: '-clear <number>'},
        )
        .setFooter('this bot sucks, i know');

        message.channel.send(newEmbed);
    }
}
