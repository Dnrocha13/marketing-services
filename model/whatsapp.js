const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

class Whatsapp {
    constructor() {
    }
    
    send(mensagem, destino, origem) {
      client.messages
      .create({
          body: mensagem,
          from: origem,
          to: `whatsapp:+55${destino}`
      })
      .then(message => console.log(message.sid));
    }
  }
  
module.exports = Whatsapp;