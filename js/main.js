//-------------------- Fancybox gallery
$(".fancybox").fancybox({
   openEffect: "fade",
   closeEffect: "fade"
 });

 //------------------- show/hide timetable

 $("#timetable").click(function () {
  $(".timetable-body").slideToggle('slow');
  var arrow = $("#timetableArrow");
  if(arrow.attr('class') !== 'timetable-arrow-rotate') {
    arrow.addClass('timetable-arrow-rotate');
  } else {
  arrow.removeClass('timetable-arrow-rotate');
  };
});

//------------------- show/hide timetable
$('.carousel').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1
});

//------------------- show/hide timetable
$('#video').click(function () {
    var src = 'https://www.youtube.com/embed/nKFDp9Y52-o';
    $('#modalVideo').modal('show');
    $('#modalVideo iframe').attr('src', src);
});

$('#modalVideo button').click(function () {
    $('#modalVideo iframe').removeAttr('src');
});

 // --------------------- desible map auto scroll
 $('.map').click(function () {
  $('.map iframe').css("pointer-events", "auto");
});

$(".map").mouseleave(function () {
  $('.map iframe').css("pointer-events", "none");
});