$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    const userInput = $("input#user-input").val().toUpperCase();

    $("#computer-shout").children("p").text(userInput);

    $("#computer-shout").show();
  });
});
