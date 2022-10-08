const Discord = require('discord.js');
const akaneko = require('akaneko');

module.exports = {
	name: 'masturbation',
  aliases:[],
  args: false,
  usage:'',
  isNSFW: true,
	description: '.',
	async run(client, message, args){
    let aA = message.author
    const aC = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription('Disfruta')
    .setImage(await akaneko.nsfw.masturbation())
    .setFooter(`Comando solicitado por ${message.member.displayName}`, client.user.displayAvatarURL())
    .setTimestamp();
    message.channel.send(aC); 
	},
};