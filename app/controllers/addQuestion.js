/*!
 * Module dependencies.
 */

exports.index = function(req, res) {
  res.render('addQuestion/index', {
    title: 'Практическое задание LeverX courses'
  });
};
