const {MessageEmbed} = require('discord.js')
const Discord = require('discord.js');
const { prefix, token, wersja, author, version} = require('../config.json');

module.exports = {
    name: "social",
    description: "informacje o serwerze bocie itp",
    aliases: ['sociale', 'media'],
    async execute(bot, message, args, Discord){

        const social = new MessageEmbed()
        .setAuthor('📌 » Sociale! « 📌')
        .setDescription(`**📆 Wszystkie klany, sociale serwera 📆**`)
        .setThumbnail(message.author.displayAvatarURL())
        .addField('📕 » GITHUB SERWEROWY', ` » https://github.com/ZadymiarzeDEV`, false)
        .addField('📘 » KLAN W CLASH ROYALE (JM MARUCHE)', ` » https://link.clashroyale.com/invite/clan/en?tag=YU208G2R&token=dbajgyrw&platform=iOS`, false)
        .addField('📗 » GRUPA NA STEAM ', `» https://steamcommunity.com/groups/coolZadymiarze`, false)
        .addField('📙 » MINECRAFTOWY SERWER DISCORD', ` » https://discord.gg/KWdgW2Wx`, false)
        .setColor('#f5f5f5')
        .setTimestamp()
        .setFooter(`Komenda wywolana przez ${message.author.tag}✨`)
        message.lineReplyNoMention(social)  

    },
}


// 📙📒