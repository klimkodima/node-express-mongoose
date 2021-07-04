$(document).ready(function () {
    // Функция для проверки введенных правильных ответов
    // Входная переменная -строка для проверки

    function checkCorrectUserAnswers(answer) {
        let flag = true; //устанавливаем начальное значение проверки
        let answerArray = answer.split(","); // Разделяем строку на массив, разделитель -запятая
        let answerSet = new Set(answerArray); // Получаем уникальное множество из массива
        if (answerSet.size < answerArray.length || answerArray.length > answerNumbers.length) { // Проверяем входную строку на уникальность значений и количество цифр
            flag == false;
        }
        flag = answerArray.every((elem) => answerNumbers.includes(elem)); // Проверяем введенные цифры на допустимые значения(1-4)
        return flag;
    }
    $("#addQuestion").click(function (a) {
        a.preventDefault();
        a
        let newAnswers = [];
        var name = $("#name").val(),
        answer1 = $("#answer1").val(),
        answer2 = $("#answer2").val(),
        answer3 = $("#answer3").val(),
        answer4 = $("#answer4").val(),
        error_message = "",
        correctAnswers = $("#correctAnswers").val();
        if ($("#name, #answer1, #answer2, #answer3, #answer4, #correctAnswers").click(function () {
                $(this).removeClass("error_input")
            }), 0 == name.length) {
            $("#name").addClass("error_input");
            error_message = error_message + CC1 + "</br>";
        } else
            $("#name").removeClass("error_input");
        if (0 == answer1.length) {
            $("#answer1").addClass("error_input");
            error_message = error_message + "Вы не ввели текст 1 варианта ответа. Попробуйте добавить вопрос заново." + "</br>";
        } else
            $("#answer1").removeClass("error_input");
        if (0 == answer2.length) {
            $("#answer2").addClass("error_input");
            error_message = error_message + "Вы не ввели текст 2 варианта ответа. Попробуйте добавить вопрос заново." + "<br>";
        } else
            $("#answer2").removeClass("error_input");
        if (0 == answer3.length) {
            $("#answer3").addClass("error_input");
            error_message = error_message + "Вы не ввели текст 3 варианта ответа. Попробуйте добавить вопрос заново." + "<br>";
        } else
            $("#answer3").removeClass("error_input");
        if (0 == answer4.length) {
            $("#answer4").addClass("error_input");
            error_message = error_message + "Вы не ввели текст 4 варианта ответа. Попробуйте добавить вопрос заново." + "<br>";
        } else
            $("#answer4").removeClass("error_input");
        if (0 == correctAnswers.length) {
            $("#correctAnswers").addClass("error_input");
            error_message = error_message + CC3 + "<br>";
        }
        if (!checkCorrectUserAnswers(correctAnswers)) { //Проверяем правильность введенных цифр отдельной функцией
            error_message = error_message + CC6 + "<br>";
            $("#correctAnswers").addClass("error_input");
        } else
            $("correctAnswers").removeClass("error_input");
        if (error_message == "") {
            $("#mail_fail").css("display", "none");
             $.post("/addQuestion", $("#contact_form").serialize(), function (a) {
            "" != a ? ($("#submit").remove(), $("#mail_success").fadeIn(500)) : ($("#mail_fail").fadeIn(500), $("#send_message").removeAttr("disabled").attr("value", a.message))
            });
       //     addQuestion(name, newAnswers, correctAnswers);
        }
        $("#mail_fail").html(error_message).css("display", "block");

        //    Добавление вопроса в базу данных
        async function addQuestion(name, newAnswers, correctUserAnswers) {

            const response = await fetch("/addQuestion", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text: name,
                    answers: newAnswers,
                    correctAnswers: correctUserAnswers
                })
            });
            if (response.ok === true) {
                const messages = await response.json();

                alert(messages.message);
            }
        }
    })
});
