let startTime = Date.now();
const config = require('../config');

// <-- EVENTO READY: -->
module.exports = (client) => {
  //Presencia del bot
  client.user.setPresence(config.statusBOT);
  //Inicio del bot
  let time = Date.now() - startTime;
  console.log(`[READY]: Estoy listo!, tomo ${time}ms`);
}
