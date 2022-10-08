module.exports = {
  name: 'prueba',
  aliases:['test'],
  args:false,
  usage:'',
  guildOnly: true,
  permissions: ['ADMINISTRATOR'],
  cooldown: 5,
  isNSFW: false,
	description: 'Prueba.',
	run:(client, message, args) => {
		message.channel.send(`**Server name:** ${message.guild.name}\n**Total members:** ${message.guild.memberCount}`);
	},
};