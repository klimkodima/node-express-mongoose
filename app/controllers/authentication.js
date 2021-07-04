/*!
 * Module dependencies.
 */

exports.login = function(req, res) {
  res.render('authentication/login', {
    title: 'Вход'
  });
};
exports.register = function(req, res) {
  res.render('authentication/register', {
    title: 'Регистрация'
  });
};
exports.registerUser = (req, res, next) => {
    Account.register(new Account({ username : req.body.username }), req.body.password, (err, account) => {
        if (err) {
          return res.render('register', { error : err.message });
        }

        passport.authenticate('local')(req, res, () => {
            req.session.save((err) => {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        });
    });
};

