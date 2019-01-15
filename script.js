// JQUERY EVENTS
$("td").on("click", strikeOut);
$(".fa-dumpster-fire").on("click", deleteOption);
$(".btn").on("click", addToDo);

// FUNCTIONS
  function addToDo() {
    var newTask = $("input").val();
    var markup = "<tr><td><span class='list-delete'><i class='fas fa-dumpster-fire'></i></span>" + newTask + "</td></tr>";
    $(".todo tr:last").after(markup);
  }

function strikeOut() {
  $(this).toggleClass("strike-out");
}

function deleteOption() {
  $(this).parent().parent().css("display", "none")
}