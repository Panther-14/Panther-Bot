const Discord = require('discord.js');
const clientN = require('nekos.life');
const neko = new clientN();

module.exports = {
	name: 'neko',
  aliases:[],
  args: false,
  usage:'',
  isNSFW: true,
	description: '.',
	async run(client, message, args){
    var nekoGif = await neko.nsfw.nekoGif();
    const embed = new Discord.MessageEmbed()
      .setImage(nekoGif.url)
      .setColor('RANDOM')
    message.channel.send(embed);
	  
  }
    
}