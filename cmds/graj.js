const Discord = require("discord.js");
const { prefix, token, wersja, author, version} = require('../config.json');
const ytdl = require('ytdl-core-discord');

module.exports = {
    name: "graj",
    description: "Ogladamy",
    aliases: ['piosenka', 'og',],
    async execute(bot, message, args, Discord){
        
        async function play(connection, url) {
            connection.play(await ytdl(url), { type: 'opus' });
          } 

    },
}