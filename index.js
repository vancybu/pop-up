$(document).ready(() => {
  $(".menu-bar").click(() => {
    $(".pop-up").show();
  });

  $(".close-pop-up").click(() => {
    $(".pop-up").hide();
  });
});
