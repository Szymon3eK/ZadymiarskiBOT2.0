const {MessageEmbed} = require('discord.js')
const Discord = require('discord.js');
const { prefix, token, wersja, author, version} = require('../config.json');

module.exports = {
    name: "help",
    description: "pomoc z komendami",
    aliases: ['pomoc'],
    async execute(bot, message, args, Discord){

    const chatpublic = new MessageEmbed()
      .setAuthor('🤍 » Powiadomienie! « 🤍')
      .setDescription(`Pamietaj aby mieć włączone wiadomości prywatne ⛄`)
      .setTitle('Komendy dostaniesz na PV! ')
      .setThumbnail(message.author.displayAvatarURL())
      .setColor('#f5f5f5')
      .setTimestamp()
      .setFooter(`Komenda wywolana przez ${message.author.tag}✨`)
      message.lineReplyNoMention(chatpublic)

    const help = new MessageEmbed()
    .setAuthor('🏠 » Komendy! « 🏠')
    .setDescription(`**Specjalnie dla ciebie swiezutkie komendy! ⛄**`)
    .setThumbnail(message.author.displayAvatarURL())
    .addField('\u200B', '\u200B')
    .addField('📌 » INFORMACJE O SOCIALACH « 📌', ` » ${prefix}social`, false)
    .addField('\u200B', '\u200B')
    .addField('🌍 » INFORMACJE O SERWERZE', ` » ${prefix}help`, true)
    .addField('🌍 » WERSJA OPROGRAMOWANIA ', `${prefix}version`, true)
    .setColor('#f5f5f5')
    .setTimestamp()
    .setFooter(`Komenda wywolana przez ${message.author.tag}✨`)
    message.author.send(help)
    },
}
