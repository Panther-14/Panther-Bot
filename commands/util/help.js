const { prefix } = require('../../config.js');

module.exports = {
	name: 'help',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
  description: 'Lista de todos mis comandos o información sobre un comando específico.',
	run:(client, message, args) => {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Aquí hay una lista de todos mis comandos:');
			data.push(commands.map(command => command.name).join(', '));
			data.push(`\n¡Puede enviar ${prefix}help [nombre del comando]  para obtener información sobre un comando específico!`);

			return message.channel.send(data, { split: true })
				
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('¡Ese no es un comando válido!');
		}

		data.push(`**Name:** ${command.name}`);

		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);
    if(command.permissions) data.push(`**Permisos:** ${command.permissions.join(', ')}`);
    if(command.isNSFW) data.push(`**NSFW:** ${command.isNSFW}`);
    if(command.args) data.push(`**Argumentos:** ${command.args}`);

		data.push(`**Cooldown:** ${command.cooldown || 3} segundo(s)`);

		message.channel.send(data, { split: true });
	},
};