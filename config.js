module.exports = {
	superusers: [],
	token: process.env.BOT_TOKEN,
	ytKey: process.env.YTAPI_KEY,
	prefix: process.env.PREFIX,
  port: process.env.PORT,
  domain: process.env.PROJECT_DOMAIN,
  dirBase: './database/base_1.db',
	statusBOT:{
    status: 'dnd',
    activity: {
      name: 'Wakanda Players',
      type: 'LISTENING'
    }
  },
};