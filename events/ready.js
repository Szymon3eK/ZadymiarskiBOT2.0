module.exports = {
	name: 'ready',
	execute(message) {
		console.log(`${message.author.tag} in #${message.channel.name} sent: ${message.content}`);
	},
};