const Discord = require('discord.js');
const star = require('star-labs');

module.exports = {
	name: 'feed',
  aliases:[],
  args: false,
  usage:'',
	description: 'Come.',
	run:(client, message, args) => {
    let aA = message.author
    let aB = message.mentions.users.first()//Utilizamos las menciones
    if (!aB) return message.channel.send('Menciona a 1 usuario para alimentarlo.');//Si no se menciona a alguien, el bot enviará esto.
    const aC = new Discord.MessageEmbed()//Pueden cambiar el embed a nuestro gusto
    .setColor('RANDOM')
    .setDescription(`**${aA.username}** alimentó a **${aB.username}**`)
    .setImage(star.feed()) /*aqui seleccionamos que envie el gif de feed (alimetar) de marsnpm */
    .setFooter(`Comando solicitado por ${message.member.displayName}`, client.user.displayAvatarURL())
    .setTimestamp();
    message.channel.send(aC); //enviamos el embed
	},
};