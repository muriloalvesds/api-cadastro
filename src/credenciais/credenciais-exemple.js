const mongoose = require('mongoose');

const DB_USER = 'User'
const DB_PASSWORD = 'Password'

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ayufhdg.mongodb.net/test`);

module.exports = class auth{
  static USER = {'user':'User'};
  static PASSWORD = {'password':'Password'};
  constructor() {
    
  }
}