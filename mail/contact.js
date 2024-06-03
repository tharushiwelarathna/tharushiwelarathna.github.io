$(function () {
  $("#contactForm").submit(function (event) {
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();

    $.ajax({
      url: "contact.php",
      type: "POST",
      data: {
        name: name,
        email: email,
        subject: subject,
        message: message,
      },
      success: function (response) {
        $("#success").html("<div class='alert alert-success'>");
        $("#success > .alert-success").html(
          "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>"
        );
        $("#success > .alert-success").append("<strong>Your message has been sent. </strong>");
        $("#success > .alert-success").append("</div>");
        $("#contactForm").trigger("reset");
      },
      error: function (xhr, status, error) {
        $("#success").html("<div class='alert alert-danger'>");
        $("#success > .alert-danger").html(
          "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>"
        );
        $("#success > .alert-danger").append(
          "<strong>Sorry " +
            name +
            ", it seems that our mail server is not responding. Please try again later!</strong>"
        );
        $("#success > .alert-danger").append("</div>");
        $("#contactForm").trigger("reset");
      },
    });
  });
});

$("#name").focus(function () {
  $("#success").html("");
});
