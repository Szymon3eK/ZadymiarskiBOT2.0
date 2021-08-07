const Discord = require('discord.js');
const fs = require('fs');
require('discord-reply');
const { Client, MessageEmbed } = require('discord.js');
const { prefix, wersja, author} = require('./config.json');
const { token } = require('./token.json')
const path = require('path');
const { eventNames } = require('process');


const client = new Discord.Client();

client.events = new Discord.Collection();


fs.readdir('./events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const eventFunction = require(`./events/${file}`);
        if (eventFunction.disabled) return;

        const event = eventFunction.event || file.split('.')[0];
        const emitter = (typeof eventFunction.emitter === 'string' ? client[eventFunction.emitter] : eventFunction.emitter) || client;
        const once = eventFunction.once;
        
        try {
            emitter[once ? 'once' : 'on'](event, (...args) => eventFunction.run(...args));
        } catch (error) {
            console.error(error.stack);
        }
    });
});

// -----------------------> CMD EXPORTS MODULE <-----------------------------------------

const bot = new Discord.Client();
bot.commands = new Discord.Collection();


const cmds = fs.readdirSync(`./cmds`).filter(file =>file.endsWith('.js'));


for(const file of cmds){
    const cmd = require(`./cmds/${file}`)

    bot.commands.set(cmd.name, cmd)
}

bot.on('message', async msg => {
    if(msg.author.bot || !msg.content.startsWith(prefix)) return;
    const args = msg.content.slice(prefix.length).split(/ +/);
    const cmdName = args.shift().toLowerCase();

    const cmd = bot.commands.get(cmdName)
        || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));

    if(!cmd) return msg.lineReplyNoMention(missingcommand);

    try{
        cmd.execute(bot, msg, args, Discord);
    }catch(e){
        msg.lineReplyNoMention(errorembed)
        console.log(err);
    }

})

bot.on('ready', () => {
    cmds.forEach(cmd => {
        console.log(`${cmd} zaladowano`)
    })

    console.log(`${bot.user.tag} zaladowal wszystko bez bledow! Wersja ${wersja}`)
})

// -----------------------> ENDS CMD EXPORTS MODULE <-----------------------------------------


// -----------------------> EVENTS EXPORTS MODULE <-----------------------------------------

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}



// -----------------------> EVENTY <-----------------------------------------




// -----------------------> EMBED MESSAGE <-----------------------------------------


const errorembed = new Discord.MessageEmbed()
    .setColor('#ed1f0c')
     .setTitle(`🛑 BLAD 🛑`)
      .setDescription(`powiadom o tym administratora! ❗`)
   .setThumbnail(`https://lh3.googleusercontent.com/proxy/S7tQGXZyDmVH2bK-0ELR6P3B4u5rwjSiZl-BjDEMgr4KkQNgafjGUfE8NNRYS0qiZliOwVS9zZ0nRD8ogyRD_we6FrNCWVNtgxy92jVn`)
    .setTimestamp();

const missingcommand = new Discord.MessageEmbed()
    .setColor('#f5f5f5')
    .setTitle(`❔ Nie znaloziono komendy❔`)
    .setDescription(`Wpisz **${prefix}help** aby poznac liste komend! 🤍`)
    .setThumbnail(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM4nopv5pJ3OsZuyD-HZkM9DoNvHCcaM-YEQ&usqp=CAU`)
    .setTimestamp()
    .setFooter(`Bot zostal zrobiony przez Szymon3eK ✨`)


// -----------------------> ENDS EMBED MESSAGE <-----------------------------------------





bot.login(token);

