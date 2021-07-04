/*!
 * Module dependencies
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Question schema
 */
 
const QuestionSchema = new Schema({
	text: { type: String, default: '' },
    answers: [{type: String, default: '' }],
    correctAnswers: [Number]
}, {
    versionKey: false,
    useCreateIndex: true
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
  /**
   * Add question
   *
   * @param {Question} question
   * @param {Object} comment
   * @api private
   */
 

/**
   * Remove all questions
   *
   * @api private
   */
   
   
   
QuestionSchema.method({});

/**
 * Statics
 */

QuestionSchema.static({});

/**
 * Register
 */

module.exports = mongoose.model('Question', QuestionSchema);
// Это  вопросы по умолчанию
const defaultQuestions = [{
        text: "Что из перечисленного не является языком программирования?",
        answers: ["HTML",
            "Java",
            "Python",
            "DevOps"],
        correctAnswers: [4]// нумерация ответов с 1!
    }, {
        text: "Какие из перечисленных видов тестирования могут быть автоматизированы?",
        answers: ["UI тестирование",
            "Юзабилити тестирование",
            "Тестирование совместимости",
            "Unit тестирование"],
        correctAnswers: [1, 2, 4]
    }, {
        text: "Выберите вариант, который соответствует следующему предположению:\"Известно, что грымзик обязательно или полосат, или рогат, или и то и другое вместе?",
        answers: ["Грымзик не может быть безрогим",
            "Грымзик не может быть однотонным и безрогим одновременно",
            "Грымзик не может быть полосатым и безрогим одновременно",
            "Грымзик не может быть однотонным и рогатым одновременно"],
        correctAnswers: [2]
    }, {
        text: "Выберите типы алгоритмов,которых не существует",
        answers: ["Алгоритм с ветвлением",
            "Циклический безусловный",
            "Циклический с параметром",
            "Алгоритм с углублением"],
        correctAnswers: [2, 4]
    }, {
        text: "Какая(какие) из следующих конструкций используется(используются) для ветвления?",
        answers: ["switch case",
            "if else",
            "do while",
            "for"],
        correctAnswers: [1, 2]
    }
];
module.exports.defaultQuestions = defaultQuestions;