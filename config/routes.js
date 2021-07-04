'use strict';

/**
 * Module dependencies.
 */

const home = require('../app/controllers/home');
const contact = require('../app/controllers/contact');
const startTest = require('../app/controllers/startTest');
const addQuestion = require('../app/controllers/addQuestion');
const authentication = require('../app/controllers/authentication');
/**
 * Expose
 */

module.exports = function(app) {
  app.get('/', home.index);
  app.get('/contact', contact.index);
  app.get('/addQuestion', addQuestion.index);
  app.get('/startTest', startTest.index);
  app.get('/startTask', startTest.getQuestions);
  app.get('/registration', authentication.login);
  app.get('/register', authentication.register);
  app.post('/register', authentication.registerUser);
  app.post('/addQuestion', addQuestion.postQuestions);
  app.post('/checkTask', startTest.checkTask);
  /**
   * Error handling
   */

  app.use(function(err, req, res, next) {
    // treat as 404
    if (
      err.message &&
      (~err.message.indexOf('not found') ||
        ~err.message.indexOf('Cast to ObjectId failed'))
    ) {
      return next();
    }
    console.error(err.stack);
    // error page
    res.status(500).render('500', { error: err.stack });
  });

  // assume 404 since no middleware responded
  app.use(function(req, res) {
    res.status(404).render('404', {
      url: req.originalUrl,
      error: 'Not found'
    });
  });
};
