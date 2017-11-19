// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(name, cb) {
    orm.insertOne("burgers", name, cb)
  },
  updateOne: function(id, cb) {
    orm.updateOne("burgers", id, cb);
  }
};

// Export the database functions for the controller (burgers_controller.js.js).
module.exports = burger;
