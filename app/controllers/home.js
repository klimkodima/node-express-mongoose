const mongoose = require('mongoose');
const Question = mongoose.model('Question');
const {
    wrap: async
} = require('co');

Question.deleteMany().then(function () {
    console.log("Data deleted") // Success
}).then(function () {
    Question.insertMany(Question.defaultQuestions)
}).then(function () {
    console.log("Data inserted");
}).catch(function (error) {
    console.log(error);
});

/*!
 * Module dependencies.
 */

exports.index = function(req, res) {
  res.render('home/index', {
    title: 'Практическое задание LeverX courses'
  });
};
