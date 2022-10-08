const Discord = require('discord.js');

module.exports = {
	name: 'avatar',
  aliases:[],
  usage:'',
  guildOnly: true,
  cooldown: 5,
  isNSFW: false,
	description: 'avatar.',
	run:(client, message, args) =>{
    let mentions = message.mentions.users.first() || message.author;

    const embed = new Discord.MessageEmbed()
    .setTitle(`Avatar de ${mentions.tag}`, mentions.displayavatarURL)
    .addField('Imagen completa',`[Descarga](${mentions.displayAvatarURL({dynamic: true, size : 1024,format:'png' })})`)
    .setImage(mentions.displayAvatarURL({dynamic: true, size : 1024 }))
    .setColor('RANDOM')
    .setFooter(`Comando solicitado por ${message.member.displayName}`, client.user.displayAvatarURL())
    .setTimestamp();
    message.channel.send(embed);
	}
};