const Discord = require('discord.js');
const clientN = require('nekos.life');
const neko = new clientN(); 

module.exports = {
	name: 'feet',
  aliases:[],
  args: false,
  usage:'',
  isNSFW: true,
	description: '.',
	async run(client, message, args){
    var feetgif = await neko.nsfw.feetGif();
    const embed = new Discord.MessageEmbed()
      .setImage(feetgif.url)
      .setColor('RANDOM')
    message.channel.send(embed);	
	  
  }
    
}