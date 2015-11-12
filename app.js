'use strict';

$(window).load(function(){
  $('#menu').sticky({ topSpacing: 0 });
  $('#showAll').addClass('active');
});

$('#showAll').on('click', function(){
  $('#showRepair').removeClass('active');
  $('#showPaint').removeClass('active');
  $('#showAll').addClass('active');
  $('#paint-prices').show();
  $('#repair-prices').show();
});

$('#showRepair').on('click', function(){
  $('#showAll').removeClass('active');
  $('#showPaint').removeClass('active');
  $('#showRepair').addClass('active');
  $('#paint-prices').hide();
  $('#repair-prices').show();
});

$('#showPaint').on('click', function(){
  $('#showAll').removeClass('active');
  $('#showRepair').removeClass('active');
  $('#showPaint').addClass('active');
  $('#paint-prices').show();
  $('#repair-prices').hide();
});

$('#subscribe').on('click', function(){
  if ( !$('#email').val() ){
    $('#email').val('Please enter your email before you submit!');
  } else {

  }
});

$('.myform').submit(function (e) {
  var $this = $(this);
  $.ajax({
      type: $this.attr("method"),
      url: $this.attr("action"),
      data: $this.serialize(),
      dataType: "json",
      contentType: "application/json"
    })
    .done(function (data) {
      console.log("Response data:", data);
    });
});
