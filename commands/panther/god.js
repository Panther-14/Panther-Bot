module.exports = {
  name: 'god',
  aliases:[],
  args: false,
  usage:'',
  guildOnly: true,
  cooldown: 5,
  isNSFW: false,
	description: 'Quien es mi dios.',
	run:(client, message, args) => {
    message.channel.send('**Mi Dios es Panther#2549**');
	},
};