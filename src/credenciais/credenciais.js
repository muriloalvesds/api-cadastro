const mongoose = require('mongoose');

const DB_USER = 'matheusw'
const DB_PASSWORD = '3KkCjLujPKyeVXbS'

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ayufhdg.mongodb.net/test`);

module.exports = class auth{
  static USER = {'user':'matheusw'};
  static PASSWORD = {'password':'3KkCjLujPKyeVXbS'};
  constructor() {
    
  }
}