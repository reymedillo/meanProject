'use strict';
module.exports = function(app) {
  // Routing logic   
  var customers = require('../controllers/customers.server.controller');
  app.route('/api/customers/test').get(customers.test);
};
