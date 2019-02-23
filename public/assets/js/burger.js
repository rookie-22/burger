$(function () {

  $(".create-form").on("submit", function (event) {

    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
    };
    // POST request
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");

        location.reload();
      }
    );
  });
  $(".devourButton").click((event) => {
    console.log(event.target);

    $.ajax("/api/burgers/" + event.target.value, {
      type: "PUT",
      data: {
        devoured: 1
      }
    }).then(() => {
      $(`.${event.target.className}`).remove();
      location.reload();
    })
  })
});