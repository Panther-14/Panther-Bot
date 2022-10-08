const Discord = require('discord.js');
const akaneko = require('akaneko');

module.exports = {
	name: 'panties',
  aliases:[],
  args: false,
  usage:'',
  isNSFW: true,
	description: '.',
	async run(client, message, args){
    let aA = message.author
    let aB = message.mentions.users.first()
    if (!aB) return message.channel.send('Menciona a 1 usuario para que te muestre sus panties.');
    const aC = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(aA.tag + ' le mostró sus panties a ' + aB.tag)
    .setImage(await akaneko.nsfw.panties())
    .setFooter(`Comando solicitado por ${message.member.displayName}`, client.user.displayAvatarURL())
    .setTimestamp();
    message.channel.send(aC); 
	},
};