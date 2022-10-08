module.exports = {
	name: 'argsinfo',
  aliases:[],
  args: true,
  usage:'[argumentos]',
	description: 'Informacion de los argumentos ingresados.',
	run:(client, message, args) => {
		if (args[0] === 'Panther#2549') {
			return message.reply('¿Como sabes eso?.... ¿Acaso nos conocemos?');
		}
		
		message.channel.send(`**Arguments:** ${args}\n**Arguments length:** ${args.length}`);
	},
};