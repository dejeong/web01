var infoHeight = $('.site-info').innerHeight(),
    siteInfo = $('.site-info'),
    siteClicked = false;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(window).on('load', function() {
  siteInfo.css({'bottom': (-1)*infoHeight});
  $('.site-icon, .project-container').animate({
      opacity: 1,
    }, 1000, function() {
      //done
  });
});

$('.site-icon').on('click', function(){
  siteInfo.removeClass('display');

  $('#profile').attr('src', '../assets/icon-01.png');
  setTimeout(function () {
    siteInfo.css({'bottom': 0});
    siteClicked = true;
  }, 250);
});

$('.site-info').on('click', function() {
  if (siteClicked) {
    siteClicked = false;
    siteInfo.css({'bottom': (-1)*infoHeight});

    $('#profile').attr('src', '../assets/icon-00.png');
    setTimeout(function () {
        siteInfo.addClass('display');
    }, 250);
  }
});

$('.site-title').on('click', function() {
  $('.site-icon, .project-container').animate({
      opacity: 0,
    }, 750, function() {
      location.href = '../index.html';
  });
});

// $('.site-close').on('click', function() {
//   if (siteClicked) {
//     $('.project-preview img').attr('src', ' ');
//     $('a.project-link').removeClass('active');
//     siteClicked = false;
//   }
// });
