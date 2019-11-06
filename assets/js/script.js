$(document).ready(function() {

  $(".dropDown-navLink_login").click(function() {
    $(".user_card-dropdown").slideToggle("fast");
  });
  $(".dropDown-navLink").click(function() {
    $(".nav-link-dropdown").slideToggle("fast");
  });
  $(function () {
    $('[data-toggle="popover"]').popover()
  })
});
