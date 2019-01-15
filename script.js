// JQUERY EVENTS

$(".list-item").click(strikeOut);
$(".fa-dumpster-fire").click(deleteOption)


// FUNCTIONS
function strikeOut() {
  $(this).toggleClass("strike-out");
}

function deleteOption() {
  $(this).parent().parent().css("display", "none")
}