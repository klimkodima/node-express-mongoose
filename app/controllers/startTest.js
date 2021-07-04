const mongoose = require('mongoose');
const Question = mongoose.model('Question');
/*!
 * Module dependencies.
 */

exports.index = function (req, res) {
    res.render('startTest/index', {
        title: 'Практическое задание LeverX courses'
    });
};

/**
 * Show
 */

exports.getQuestions = function (req, res) {
    Question.find({}, function (err, allquestions) {
        console.log("Тест начался");
        res.render('startTest/startTest', {
            questions: allquestions,
        });
        if (err) {
            console.log(err);
            return response.sendStatus(400);
        };
    }).catch(function (error) {
        console.log(error);
    });

}

exports.checkTask = function (req, res) {
    if (!req.body)
        return res.sendStatus(400);
    const answers = req.body.answers;
    Question.find({}, function (err, questions) {
        console.log("Проверка теста");
        if (err)
            return console.log(err);
        let message = checkTask(answers, questions);
        res.send(JSON.stringify({
                message: message
            }));
    });
}

function checkTask(answers,questions) {
    let result = 0; // Количество правильно отвеченных вопросов
    let allQuestions = questions.length; // Общее количество вопросов
    let wronAnswerMessage = `Вы неправильно ответили на вопросы:
	
	`; //Часть шаблона сообщения СС7
    for (let n = 0; n < allQuestions; ++n) { //Проходим циклом по всем вопросам
        let question = questions[n];
        let idx = 1 + n;
		let text = question.text; //Берем текст вопроса в переменную
     if( JSON.stringify(question.correctAnswers.join(","))==JSON.stringify(answers[n])){
            result++; // Защитываем правильный ответ
        } else {
            wronAnswerMessage = wronAnswerMessage + idx + `. ` + text + `
`			//Записываем неправильный вопрос в шаблон  неполного результата
        }
    }
    let rezultMessage = `Ваш результат ${result} из ${allQuestions}`; //Записываем результат  задания в переменную
    if (result == allQuestions) { //Если на все вопросы отвечено правильно
        return (rezultMessage); // Выводим  максимальный результат
    } else {
        wronAnswerMessage = wronAnswerMessage + `
		` + rezultMessage; //Выводим результат
       return(wronAnswerMessage);
    }
}