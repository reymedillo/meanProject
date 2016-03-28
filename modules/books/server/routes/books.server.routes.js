'use strict';
/**
 * Module dependencies
 */
module.exports = function(app) {
  var booksPolicy = require('../policies/books.server.policy'),books = require('../controllers/books.server.controller');
  // Books Routes
  app.route('/api/books').all(booksPolicy.isAllowed)
    .get(books.list)
    .post(books.create);

  app.route('/api/books/test').get(books.test);

  app.route('/api/books/:bookId').all(booksPolicy.isAllowed)
    .get(books.read)
    .put(books.update)
    .delete(books.delete);

  // Finish by binding the Book middleware
  app.param('bookId', books.bookByID);
  app.param('test',books.test);
};
