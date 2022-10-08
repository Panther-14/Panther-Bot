const Discord = require('discord.js');
const  client  = new Discord.Client();
const config = require('./config.js');
const fs = require('fs');
require('./server.js')();
require('dotenv').config();

client.commands = new Discord.Collection();

client.cooldowns = new Discord.Collection();

// <-- CONTROLADOR DE COMANDOS: -->
const commands = fs.readdirSync('./commands');
for (const folder of commands) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

// <-- CONTROLADOR DE EVENTOS: -->
for(const file of fs.readdirSync('./events/')){
  if(file.endsWith(".js")){
    let fileName = file.substring(0, file.length - 3);
    let fileContents = require(`./events/${file}`);
    client.on(fileName, fileContents.bind(null, client));
    delete require[require(`./events/${file}`)];
  }
}

// <-- PROPIEDAD LOGIN: -->
client.login(config.token)
  .then(() => { 
    console.log(`[LOGIN]: Hola!, soy ${client.user.tag}`);
  })
  .catch((err) => {
    console.error("Error al iniciar sesión: " + err);

  });