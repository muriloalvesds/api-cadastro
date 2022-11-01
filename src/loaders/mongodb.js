const cred = require('../credenciais/credenciais')
const mongoose = require('mongoose');
const myJSON = JSON.stringify(cred);


async function startDB(){
  const cred = require('../credenciais/credenciais')
  await mongoose.connect(`mongodb+srv://${cred.USER.user}:${cred.PASSWORD.password}@cluster0.ayufhdg.mongodb.net/test`
  );
}

module.exports = startDB;