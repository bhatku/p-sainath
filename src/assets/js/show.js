$(document).ready(function () {
  let hash = document.location.hash.slice(1);
  $(`div#${hash}`).addClass("tab-pane show active");
})
