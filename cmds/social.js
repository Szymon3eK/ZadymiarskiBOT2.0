const {MessageEmbed} = require('discord.js')
const Discord = require('discord.js');
const { prefix, token, wersja, author, version} = require('../config.json');

module.exports = {
    name: "social",
    description: "informacje o serwerze bocie itp",
    aliases: ['sociale', 'media'],
    async execute(bot, message, args, Discord){

        const social = new MessageEmbed()
        .setAuthor('๐ ยป Sociale! ยซ ๐')
        .setDescription(`**๐ Wszystkie klany, sociale serwera ๐**`)
        .setThumbnail(message.author.displayAvatarURL())
        .addField('๐ ยป GITHUB SERWEROWY', ` ยป https://github.com/ZadymiarzeDEV`, false)
        .addField('๐ ยป KLAN W CLASH ROYALE (JM MARUCHE)', ` ยป https://link.clashroyale.com/invite/clan/en?tag=YU208G2R&token=dbajgyrw&platform=iOS`, false)
        .addField('๐ ยป GRUPA NA STEAM ', `ยป https://steamcommunity.com/groups/coolZadymiarze`, false)
        .addField('๐ ยป MINECRAFTOWY SERWER DISCORD', ` ยป https://discord.gg/KWdgW2Wx`, false)
        .setColor('#f5f5f5')
        .setTimestamp()
        .setFooter(`Komenda wywolana przez ${message.author.tag}โจ`)
        message.lineReplyNoMention(social)  

    },
}


// ๐๐