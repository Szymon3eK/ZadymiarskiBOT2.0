
const Discord = require("discord.js");
const { prefix, token, wersja, author, version} = require('../config.json');

module.exports = {
    name: "version",
    description: "wersja oprogramowania",
    aliases: ['wersja', 'oprogramowanie', 'v'],
    async execute(bot, message, args, Discord){
        
        const version = new Discord.MessageEmbed()
        .setAuthor('๐ Wersja oprogramowania ๐')
        .setTitle('Tutaj sprawdzisz wszystkie wersje! ๐ค')
        .addField(`Wersja Discord.js`, `๐ ยป ${Discord.version}`, true)
        .addField(`Wersja bota`, `๐ ยป ${wersja}`, true)
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp()
        .setFooter(`Bot stworzony przez ${author}๐`)
        message.lineReplyNoMention(version)

    },
}