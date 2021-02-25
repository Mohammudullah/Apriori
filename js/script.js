$(function(){
    
  //navbar toggler animation
  $('.navbar-toggler').click(function(){
    $('.line1').toggleClass('line1cross');
    $('.line2').toggleClass('line2opacity');
    $('.line3').toggleClass('line3cross');
  });
  //faq section animation
  $('.faq-card-toggleer').click(function(){
    $(this).toggleClass('faq-card-toggleer-animation');
  });
  //fans section slider
  $('.fans-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1500,
      verticalSwiping: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToScroll: 1,
            verticalSwiping: false,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToScroll: 1,
            verticalSwiping: false,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToScroll: 3,
            slidesToShow: 3
          }
        }
      ]
    });

  //partners section slider
  $('.partners-slider-main').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1500,
      arrows: false,
      responsive: [
        {
          breakpoint:400,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1
          }
        },
        {
          breakpoint:576,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 2
          }
        },
        {
          breakpoint:768,
          settings: {
            slidesToScroll: 3,
            slidesToShow: 3
          }
        },
        {
          breakpoint:992,
          settings: {
            slidesToScroll: 4,
            slidesToShow: 4
          }
        },
        {
          breakpoint:1200,
          settings: {
            slidesToScroll: 5,
            slidesToShow: 5
        }
        }
      ]
    });

    //counter up initialization
    $('.counter').counterUp({
      time: 3000
  });

    //Back To Top button
    $('.bttop').click(function(){

      $('html,body').animate({scrollTop:0},800);
    });

    //Back To Top and Navbar animation
    $(window).scroll(function(){
      var scrollamount = $(this).scrollTop();

      if(scrollamount > 250) {
        $('.bttop').addClass('bttop2');
        $('.navbar').addClass('navbar-background');

      }
      else{
        $('.bttop').removeClass('bttop2');
        $('.navbar').removeClass('navbar-background');
      }
      });

    //news section video initialization
      $('.news-video').venobox(); 

     //team image gallery initialization
      $('.venobox').venobox(); 

      //Smooth Scroll
      var scrollLink = $('.this-page');
      $(scrollLink).click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top-50});
      });
});

//News Latter Form Validation
var firstmailbox = document.getElementById('mail');
var secondmailbox = document.getElementById('footer-mail');

function firstmail(){

  if(firstmailbox.value == "") {
    firstmailbox.focus();
    return false;
  }
  else if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/).test(firstmailbox.value)) {
    firstmailbox.style.cssText = "color: red";
    return false;
  }
}
function focus1 (){
  firstmailbox.style.cssText = "color: rgba(7,6,35,0.20)"
}

function footermail(){

  if(secondmailbox.value == "") {
    secondmailbox.focus();
    return false;
  }
  else if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/).test(secondmailbox.value)) {
    secondmailbox.style.cssText = "color: red";
    return false;
  }
}
function focus2 () {
  secondmailbox.style.cssText = "color: #3B3A52;";
} 

//Contact page form validation
function contact_msg () {

  var msg_name = document.getElementById('msg-name');
  var msg_email = document.getElementById('msg-email');
  var msg_massage = document.getElementById('msg-massage');
  var agreement = document.getElementById('agreement');


  if (msg_name.value == "") {
    msg_name.focus();
    return false;
  }
  else if(msg_email.value == "") {
    msg_email.focus();
    return false;
  }
  else if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/).test(msg_email.value)) {
    msg_email.style.cssText = "border: 2px solid red;";
    return false;
  }
  else if(msg_massage.value == "") {
    msg_massage.focus();
    return false;
  }
  else if(!agreement.checked) {
    document.getElementsByClassName('must-agree')[0].style.cssText = 'display:block';
    return false;
  }
}

function agreement_ok() {
  var agreement = document.getElementById('agreement');
  if(agreement.checked) {
    document.getElementsByClassName('must-agree')[0].style.cssText = 'display:none';
  }
  else {
    document.getElementsByClassName('must-agree')[0].style.cssText = 'display:block';
  }
}
function error_correct() {
  this.style.cssText = "border: rgba(59,58,82,.25) 2px solid;";
}

//Search page form validation
function post_validate () {

  var post_comment = document.getElementById('post-comment');
  var post_name = document.getElementById('post-name');
  var post_email = document.getElementById('post-email');

  if(post_comment.value == "") {
    post_comment.focus();
    return false;
  }
  else if(post_name.value == "") {
    post_name.focus();
    return false;
  }
  else if(post_email.value == "") {
    post_email.focus();
    return false;
  }
  else if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/).test(post_email.value)) {
    post_email.style.cssText = "border: red 2px solid;";
    return false;
  }
}

function error_found() {
  var post_email = document.getElementById('post-email');
  if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/).test(post_email.value)) {
    post_email.style.cssText = "border: red 2px solid;";
  }
}
