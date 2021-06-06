const {MessageEmbed} = require('discord.js')
const Discord = require('discord.js');


module.exports = {
    name: "info",
    description: "informacje o serwerze bocie itp",
    async execute(bot, message, args, Discord){

    const embed = new MessageEmbed()
      .setTitle('📡 » Informacje! « 📡')
      .setThumbnail(message.author.displayAvatarURL())
      .setColor('#f5f5f5')
      .addFields(
        { name: 'Moj ping!', value: `🕐 »  **${bot.ws.ping}** MS`, inline: false},
        { name: 'Zalozyciel serwera!', value: `👑 » **${message.guild.owner}**`, inline: false }, // blad lekki
        { name: 'Serwer stworzono!', value: `⏳ » ${message.guild.createdAt.toLocaleString()}`, inline: false },
        { name: 'Lokalizacja!', value: `🌎 » ${message.guild.region}`, inline: false },
        { name: 'Osoby!', value:  `👨‍👩‍👦‍👦 » **${message.guild.memberCount}** osob na serwerze!`, inline: false },
      )
      .setTimestamp()
      .setFooter(`Komenda wywolana przez ${message.author.tag} ✨`)
      message.lineReplyNoMention(embed)

    },
}
// https://stackoverflow.com/questions/51005933/how-do-i-call-upon-a-separate-embed-file-and-then-command-it/51611634