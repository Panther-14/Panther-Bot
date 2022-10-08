const Discord = require('discord.js');
const clientN = require('nekos.life');
const neko = new clientN();

module.exports = {
	name: 'kuni',
  aliases:[],
  args: false,
  usage:'',
  isNSFW: true,
	description: '.',
	async run(client, message, args){
    var kuni = await neko.nsfw.kuni();
    const embed = new Discord.MessageEmbed()
      .setImage(kuni.url)
      .setColor('RANDOM')
    message.channel.send(embed);	  
  }
    
}