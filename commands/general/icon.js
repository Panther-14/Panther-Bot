const Discord = require('discord.js');

module.exports = {
	name: 'icon',
  aliases:[],
  usage:'',
  guildOnly: true,
  cooldown: 5,
  isNSFW: false,
	description: 'Icon.',
	run:(client, message, args) => {
		let icono = message.guild.iconURL({size : 2048, dynamic: true});
    const embed = new Discord.MessageEmbed()
      .setTitle(`Icono de ${message.guild.name}`)
      .setColor("RANDOM")
      .setImage(`${icono}`)
      .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL())
      .setTimestamp();
    message.channel.send(embed);
	},
};