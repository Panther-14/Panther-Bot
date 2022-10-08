const Discord = require('discord.js');

module.exports = {
	name: 'ping',
  aliases:[],
  description: 'Ping!.',
	run:(client, message, args) => {
    let ping = Date.now() - message.createdTimestamp;//Math.floor(message.client.ping); //Definimos la variable ping
		if(ping > 300){ //Si es mayor de 300
			const pingA = new Discord.MessageEmbed() //Creamos el embed
			.setTitle('Pong! | :ping_pong:')
			.setDescription(":red_circle: | " + ping + " ms")
			.setColor("RED")
			.setTimestamp() //Hora
			message.channel.send(pingA);
			
		}else if(ping > 200){ //Si es mayor de 200
			const pingMO = new Discord.MessageEmbed() //Creamos el embed
			.setTitle('Pong! | :ping_pong:')
			.setDescription(":yellow_circle: | " + ping + " ms")
			.setColor("YELLOW")
			.setTimestamp() //Hora
			message.channel.send(pingMO);

		}else if(ping > 100){ //Si es mayor de 100
			const pingM = new Discord.MessageEmbed() //Creamos el embed
			.setTitle('Pong! | :ping_pong:')
			.setDescription(":green_circle: | " + ping + " ms")
			.setColor("GREEN")
			.setTimestamp() //Hora 
			message.channel.send(pingM);

		}else{ //Embed por default
			const pingN = new Discord.MessageEmbed() //Creamos el embed 
			.setTitle('Pong! | :ping_pong:')
			.setDescription(":white_circle: | " + ping + " ms")
			.setColor("#fefefe")
			.setTimestamp() //Hora
			message.channel.send(pingN);

		}

	},
};