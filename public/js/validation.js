$(document).ready(function() {
    $("#send_message").click(function(a) {
		
        a.preventDefault();
        var b = !1,
            c = $("#name").val(),
            d = $("#email").val(),
            e = $("#phone").val(),
            f = $("#message").val();
        if ($("#name,#email,#phone,#message").click(function() {
                $(this).removeClass("error_input")
            }), 0 == c.length) {
            var b = !0;
            $("#name").addClass("error_input")
        } else $("#name").removeClass("error_input");
        if (0 == d.length || "-1" == d.indexOf("@")) {
            var b = !0;
            $("#email").addClass("error_input")
        } else $("#email").removeClass("error_input");
        if (0 == e.length) {
            var b = !0;
            $("#phone").addClass("error_input")
        } else $("#phone").removeClass("error_input");
        if (0 == f.length) {
            var b = !0;
            $("#message").addClass("error_input")
        } else $("#message").removeClass("error_input");
        0 == b && ($("#send_message").attr({
            disabled: "true",
            value: "Sending..."
        }), $.post("email.php", $("#contact_form").serialize(), function(a) {
            "sent" == a ? ($("#submit").remove(), $("#mail_success").fadeIn(500)) : ($("#mail_fail").fadeIn(500), $("#send_message").removeAttr("disabled").attr("value", "Send The Message"))
        }))
    })
	$("#addQuestion").click(function(a) {
		
        a.preventDefault();
        var b = !1,
            name = $("#name").val(),
            answer1 = $("#answer1").val(),
            answer2 = $("#answer2").val(),
            answer3 = $("#answer3").val(),
			answer4 = $("#answer4").val(),
			error_message ="";
            correctAnswers = $("#correctAnswers").val();
        if ($("#name,#answer1,#answer2,#answer3,#answer4, #correctAnswers").click(function() {
                $(this).removeClass("error_input")
            }), 0 == name.length) {
            var b = !0;
            $("#name").addClass("error_input");
			error_message=error_message +CC1+"\n";
        } else $("#name").removeClass("error_input");
        if (0 ==  answer1.length) {
            var b = !0;
            $("#answer1").addClass("error_input");
			error_message=error_message + `Вы не ввели текст 1 варианта ответа. Попробуйте добавить вопрос заново.
			`;
        } else $("#answer1").removeClass("error_input");
        if (0 == answer2.length) {
            var b = !0;
            $("#answer2").addClass("error_input");
			error_message=error_message + "Вы не ввели текст 2 варианта ответа. Попробуйте добавить вопрос заново.\n";
        } else $("#answer2").removeClass("error_input");
		if (0 == answer3.length) {
            var b = !0;
            $("#answer3").addClass("error_input");
			error_message=error_message + "Вы не ввели текст 3 варианта ответа. Попробуйте добавить вопрос заново.\n";
        } else $("#answer3").removeClass("error_input");
        if (0 == answer4.length) {
            var b = !0;
            $("#answer4").addClass("error_input");
			error_message=error_message + "Вы не ввели текст 4 варианта ответа. Попробуйте добавить вопрос заново.\n";
        } else $("#answer4").removeClass("error_input");
		$("#mail_fail").html(error_message);
       // 0 == b && ($("#send_message").attr({
       //     disabled: "true",
      //      value: "Sending..."
      //  }), $.post("email.php", $("#contact_form").serialize(), function(a) {
       //     "sent" == a ? ($("#submit").remove(), $("#mail_success").fadeIn(500)) : ($("#mail_fail").fadeIn(500), $("#send_message").removeAttr("disabled").attr("value", "Send The Message"))
       // }))
    })
});