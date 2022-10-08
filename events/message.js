const config = require('../config');
const Discord = require('discord.js');

// <-- EVENTO MESSAGE: -->
module.exports = async (client, message) => {
  //Si no inicia con el prefix o si es un bot regresa
  if(!message.content.startsWith(config.prefix)) return;
  if(message.author.bot) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/);

  const commandName = args.shift().toLowerCase();
  
  //Obtener el comando por su nombre o sus alias
  let cmd = client.commands.get(commandName) || client.commands.find(cmnd => cmnd.aliases && cmnd.aliases.includes(commandName));
  //Si no existe comando regresa
  if(!cmd) return;
  
  //GuildOnly Comands 
  if (cmd.guildOnly && message.channel.type === 'dm') {
	  return message.reply('¡No puedo ejecutar ese comando dentro de los DM!');
  }
  //Permisos
  if (cmd.permissions) {
    const authorPerms = message.channel.permissionsFor(message.author);
    if (!authorPerms || !authorPerms.has(cmd.permissions)) {
      return message.reply('¡No puedes hacer esto!');
    }
  }
  //Validar argumentos en caso de que los requiera
  if (cmd.args && !args.length) {

    let reply = `No proporcionaste ningun argumento, ${message.author}!`;

    if (cmd.usage) {
      reply += `\nEl uso correcto es: \`${config.prefix}${cmd.name} ${cmd.usage}\``;       
    }
    
    return message.channel.send(reply);
  }
  //Cooldowns
  const { cooldowns } = client;

	if (!cooldowns.has(cmd.name)) {
		cooldowns.set(cmd.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(cmd.name);
	const cooldownAmount = (cmd.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`Espere por favor ${timeLeft.toFixed(1)}  segundos más antes de reutilizar el comando \`${cmd.name}\` .`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  //NSFW Commands
  if (cmd.isNSFW && !message.channel.nsfw) {
    return message.channel.send(":x: | No puedes utilizar este comando en un chat que no es **NSFW**")
  }
  //Ejecuta el comando
  cmd.run(client, message, args);
  //cmd.execute(message, args);
}