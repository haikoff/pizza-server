const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

require('dotenv').config();

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGO_URL;
db.Sushi = require("./sushi.model.js")(mongoose);
db.Pizza = require("./pizza.model.js")(mongoose);
db.Desert = require("./desert.model.js")(mongoose);
db.Drink = require("./drink.model.js")(mongoose);
db.Kombo = require("./kombo.model.js")(mongoose);
db.Sous = require("./sous.model.js")(mongoose);
db.Zakuski = require("./zakuski.model.js")(mongoose);

module.exports = db;
