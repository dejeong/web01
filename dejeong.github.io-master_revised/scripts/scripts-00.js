var infoHeight = $('.site-info').innerHeight(),
    siteInfo = $('.site-info'),
    siteClicked = false;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(window).on('load', function() {
  siteInfo.css({'bottom': (-1)*infoHeight});
  $('.site-projects, .site-icon, .project-preview img, .project-container').animate({
      opacity: 1,
    }, 1000, function() {
      //done
  });
});

$('.site-icon').on('click', function(){
  siteInfo.removeClass('display');
  $('#profile').attr('src', 'assets/icon-01.png');
  setTimeout(function () {
    siteInfo.css({'bottom': 0});
    siteClicked = true;
  }, 250);
});

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

$('a.project-link').on('click', function(e) {
  e.preventDefault();
  var imgSrc = $(this).attr('id');
      that = $(this);

  if ($(this).hasClass('active')) {
    $('.project-preview img').attr('src', ' ');
    $(this).removeClass('active');
    siteClicked = false;
  }

  else {
    $('a.project-link').removeClass('active');
    $(this).addClass('active');
    setTimeout(function () {
      siteClicked = true;
    }, 250);

    $('.project-preview img').attr('src', 'assets/' + imgSrc +'/' + imgSrc + '.png');
    $('.project-preview img').attr('id', imgSrc);
    $('.project-preview').css({
      'left': getRandomInt(0,75) + 'vw'
      // 'top': getRandomInt(0,15) + 'vh'
    });
  }
});

$('.site-close').on('click', function() {
  if (siteClicked) {
    $('.project-preview img').attr('src', ' ');
    $('a.project-link').removeClass('active');
    siteClicked = false;
  }
});

$('.project-preview img').on('click', function() {
  var page = $(this).attr('id');
  $('.site-projects, .site-icon, .project-preview img, .site-info').animate({
      opacity: 0,
    }, 750, function() {
      location.href = 'pages/' + page + '.html';
  });
});
