const {MessageEmbed} = require('discord.js')
const Discord = require('discord.js');


module.exports = {
    name: "info",
    description: "informacje o serwerze bocie itp",
    async execute(bot, message, args, Discord){

    const embed = new MessageEmbed()
      .setTitle('๐ก ยป Informacje! ยซ ๐ก')
      .setThumbnail(message.author.displayAvatarURL())
      .setColor('#f5f5f5')
      .addFields(
        { name: 'Moj ping!', value: `๐ ยป  **${bot.ws.ping}** MS`, inline: false},
        { name: 'Zalozyciel serwera!', value: `๐ ยป **${message.guild.owner}**`, inline: false }, // blad lekki
        { name: 'Serwer stworzono!', value: `โณ ยป ${message.guild.createdAt.toLocaleString()}`, inline: false },
        { name: 'Lokalizacja!', value: `๐ ยป ${message.guild.region}`, inline: false },
        { name: 'Osoby!', value:  `๐จโ๐ฉโ๐ฆโ๐ฆ ยป **${message.guild.memberCount}** osob na serwerze!`, inline: false },
      )
      .setTimestamp()
      .setFooter(`Komenda wywolana przez ${message.author.tag} โจ`)
      message.lineReplyNoMention(embed)

    },
}
