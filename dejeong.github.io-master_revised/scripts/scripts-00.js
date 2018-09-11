var infoHeight = $('.site-info').innerHeight(),
    siteInfo = $('.site-info'),
    siteClicked = false;

/*Random position calculation*/
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*loading whole screen*/
$(window).on('load', function() {
  siteInfo.css({'bottom': (-1)*infoHeight});
  $('.site-projects, .site-icon, .project-preview img, .project-container').animate({
      opacity: 1,
    }, 1000, function() {
  });
});


/*Hover Event로 작성 (수정)*/
$('a.project-link').hover(function (e){
  e.preventDefault();
  var imgSrc = $(this).attr('id');
      that = $(this);

  if ($(this).hasClass('active')) {
    $('.project-preview img').attr('src', 'assets/Blank.png');
    $(this).removeClass('active');
  }

  else {
    $('a.project-link').removeClass('active');
    $(this).addClass('active');
    $('.project-preview img').attr('src', 'assets/' + imgSrc +'/' + imgSrc + '.png');
    $('.project-preview img').attr('id', imgSrc);
    $('.project-preview').css({
      'left': getRandomInt(10,65) + 'vw',
      //'top': getRandomInt(20,30)/1.1 + 'vh'
    });
  }
},
function(){
  $('.project-preview img').attr('src', 'assets/Blank.png');
  $(this).removeClass('active');
  siteInfo.css({'bottom': (-1)*infoHeight});
  $('.site-projects, .site-icon, .project-preview img, .project-container').animate({
      opacity: 1,
    }, 1000, function() {
  });
});


/*on Event로 작성 Code (원본)*/
/*
$('a.project-link').on('mouseover', function(e) {
  e.preventDefault();
  var imgSrc = $(this).attr('id');
      that = $(this);

  if ($(this).hasClass('active')) {
    $('.project-preview img').attr('src', ' ');
    $(this).removeClass('active');
  }

  else {
    $('a.project-link').removeClass('active');
    $(this).addClass('active');

    $('.project-preview img').attr('src', 'assets/' + imgSrc +'/' + imgSrc + '.png');
    $('.project-preview img').attr('id', imgSrc);
    $('.project-preview').css({
      'left': getRandomInt(0,75) + 'vw'
      //'top': getRandomInt(0,15) + 'vh'
    });
  }
});


$('a.project-link').on('mouseout', function() {
  $(this).removeClass('active');
  $('.project-preview img').empty();
  siteInfo.css({'bottom': (-1)*infoHeight});
  $('.site-projects, .site-icon, .project-preview img, .project-container').animate({
      opacity: 1,
    }, 1000, function() {
      //done
  });
});
*/


/*Link to project details*/
$('.project-link').on('click', function() {
  var page = $(this).attr('id');
  $('.site-projects, .site-icon, .project-preview img, .site-info').animate({
      opacity: 0,
    }, 750, function() {
      location.href = 'pages/' + page + '.html';
  });
});


/*default function*/
$('.site-icon').on('click', function(){
  siteInfo.removeClass('display');
  $('#profile').attr('src', 'assets/icon-01.png');
  setTimeout(function () {
    siteInfo.css({'bottom': 0});
    siteClicked = true;
  }, 250);
});


/*defailt function*/
$('.site-info').on('click', function() {
  if (siteClicked) {
    siteClicked = false;
    siteInfo.css({'bottom': (-1)*infoHeight});
    $('#profile').attr('src', 'assets/icon-00.png');
    setTimeout(function () {
        siteInfo.addClass('display');
    }, 250);
  }
});


/*defailt function*/
$('.site-close').on('click', function() {
  if (siteClicked) {
    $('.project-preview img').attr('src', ' ');
    $('a.project-link').removeClass('active');
    siteClicked = false;
  }
});
