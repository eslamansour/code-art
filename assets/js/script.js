$(document).ready(function() {
  $(".dropDown-navLink").click(function() {
    $(".nav-link-dropdown").slideToggle("fast");
  });
  $(function () {
    $('[data-toggle="popover"]').popover()
  })
});
