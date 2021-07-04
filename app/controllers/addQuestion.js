const mongoose = require('mongoose');
const Question = mongoose.model('Question');
/*!
 * Module dependencies.
 */

exports.index = function (req, res) {
    res.render('addQuestion/index', {
        title: 'Практическое задание LeverX courses'
    });
};
exports.postQuestions = function (req, res) {
    if (!req.body)
        return res.sendStatus(400);
    let newAnswers = [];
    //   const newQuestion = req.body.text;
    //    const newAnswers = req.body.answers;
    //    const newcorrectAnswers = req.body.correctAnswers;
    const newQuestion = req.body.question;
    newAnswers.push(req.body.answer1, req.body.answer2, req.body.answer3, req.body.answer4);
    const newcorrectAnswers = req.body.correctAnswers;
    const question = new Question({
        text: newQuestion,
        answers: newAnswers,
        correctAnswers: newcorrectAnswers
    });
    question.save(function (err) {
        if (err)
            return console.log(err);
        res.send({
            message: "Вопрос добавлен в базу данных"
        });
    });
};
