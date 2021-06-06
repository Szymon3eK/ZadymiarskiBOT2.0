
const Discord = require("discord.js");
const { prefix, token, wersja, author, version} = require('../config.json');

module.exports = {
    name: "version",
    description: "wersja oprogramowania",
    aliases: ['wersja', 'oprogramowanie', 'v'],
    async execute(bot, message, args, Discord){
        
        const version = new Discord.MessageEmbed()
        .setAuthor('🔘 Wersja oprogramowania 🔘')
        .setTitle('Tutaj sprawdzisz wszystkie wersje! 🤍')
        .addField(`Wersja Discord.js`, `🌐 » ${Discord.version}`, true)
        .addField(`Wersja bota`, `🌐 » ${wersja}`, true)
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp()
        .setFooter(`Bot stworzony przez ${author}🎇`)
        message.lineReplyNoMention(version)

    },
}