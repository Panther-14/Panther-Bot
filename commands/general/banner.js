const Discord = require('discord.js');

module.exports = {
	name: 'banner',
  aliases:[],
  usage:'',
  guildOnly: true,
  cooldown: 5,
  isNSFW: false,
	description: 'Banner.',
	run:(client, message, args) => {
		let banner = message.guild.bannerURL({size : 2048, dynamic: true});
    if(banner != null){
      const embed = new Discord.MessageEmbed()
      .setTitle(`Icono de ${message.guild.name}`)
      .setColor("RANDOM")
      .setImage(`${banner}`)
      .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL())
      .setTimestamp();
    }else{
      message.channel.send(`${message.guild.name} no tiene banner`);
    }
	},
};
