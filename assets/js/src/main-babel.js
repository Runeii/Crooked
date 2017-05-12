"use strict";

//Test features
var passiveSupported = false;
try {
  var options = Object.defineProperty({}, "passive", {
    get: function get() {
      passiveSupported = true;
    }
  });
  window.addEventListener("test", null, options);
} catch (err) {}

//Cache elements
var body = document.body,
    nav = document.getElementById('nav'),
    header = document.getElementById('header'),
    sun = document.getElementById('sun'),
    lede = document.querySelector('#welcome .lede'),
    introduction = document.querySelector('#welcome .introduction'),
    parallax_one,
    parallax_two,
    parallax_three,
    parallax_four,
    parallax_five;

//General variables
var transitioning = false;
var swapping = false;
var worldData;
var target;
var windowHeight = $(window).height();
var event_stop_one = false;
var event_stop_two = false;
var event_stop_three = false;
console.log(wordpress.template_directory + "/worlds.json");
//Kick everything off
$.getJSON(wordpress.template_directory + "/worlds.json", function (data) {
  console.log('Worlds loaded');
  worldData = data;
  var get = getParameters(getNavUrl());
  setupParallax(get.world);
});

// Page scrolling effects
var last_scroll = windowHeight / 100;
var ticking = false;

function resetScroll() {
  nav.classList.add('hide');
  last_scroll = 0;
}

//Animation work
animate_stage();

function animate_stage() {
  body.classList.add('sunrise');
  setTimeout(function () {
    body.classList.add('daytime');
  }, 5000);
}

$(".explore-button a").click(function () {
  console.log(1);
  if (transitioning === false) {
    $('#the_cans .image img').each(function () {
      $(this).css({ 'height': $(this).height(), 'width': $(this).width() });
    });
    transitioning = true;
    target = $("#" + this.getAttribute("target"));
    target.parents().addClass('target_parent');
    target.addClass('target_world');
    body.classList.add('transition-start');
    body.classList.remove('sunrise');
    console.log('1.5');
    $(header).one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function (e) {
      if (event_stop_one === false) {
        event_stop_one = true;
        body.classList.add('transition-setup');
        console.log('1.56');
        target.parent().one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function (e) {
          if (event_stop_two === false) {
            event_stop_two = true;
            body.classList.add('transitioning');
            console.log('1.57');
            $('.target_parent > .world_info :last-child').one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function (e) {
              if (event_stop_three === false) {
                event_stop_three = true;
                console.log('1.59');
                refreshElements();
              }
            });
          }
        });
      }
    });
  }
  return false;
});

function refreshElements() {
  event_stop_one = false;
  event_stop_two = false;
  event_stop_three = false;
  var world = $(target).attr("world");
  var elements = worldData[world];
  console.log(2);
  var newHTML = '';
  $.each(elements, function (key, value) {
    newHTML += '<img src="' + wordpress.template_directory + value + '" id="' + world + '_' + key + '"/>';
  });
  target.closest('.can').animate({
    'opacity': 0
  }, {
    duration: 1000,
    start: function start() {
      body.classList.remove('midnight', 'default', 'dayglo', 'mother');
      body.classList.add(world);
    },
    complete: function complete() {
      switchWorld(world, newHTML);
      console.log(3);
    }
  });
}

function switchWorld(world, html) {
  header.innerHTML = html;
  lede.innerHTML = worldData.copy[world].lede;
  introduction.innerHTML = worldData.copy[world].introduction;
  console.log(4);
  setupParallax(world, page_sunrise());
}

function setupParallax() {
  var world = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var layers = worldData.layers[world];
  var record = worldData[world];
  var prefix;
  if (world == 'default') {
    prefix = '#';
  } else {
    prefix = '#' + world + '_';
  }
  $.each(layers, function (layer, entries) {
    for (var i = 0, len = entries.length; i < len; i++) {
      $(prefix + entries[i]).addClass('parallax_' + layer);
      delete record[entries[i]];
    }
  });
  $.each(record, function (element) {
    $(prefix + element).addClass('parallax_five');
  });
  parallax_one = $('.parallax_one');
  parallax_two = $('.parallax_two');
  parallax_three = $('.parallax_three');
  console.log(5);
  parallax_four = $('.parallax_four');
  parallax_five = $('.parallax_five');
  setup_scroll();
  callback(world);
}

function setup_scroll(world) {
  window.addEventListener('scroll', function (e) {
    this_scroll = window.scrollY;
    if (this_scroll >= last_scroll * 1.1) {
      nav.classList.add('hide');
      last_scroll = this_scroll;
    } else if (this_scroll <= last_scroll / 1.1) {
      nav.classList.remove('hide');
      last_scroll = this_scroll;
      console.log(6);
    }
    if (!ticking) {
      window.requestAnimationFrame(function () {
        var offset = this_scroll * -2;
        parallax_one.css({ 'margin-bottom': offset / 5 + "px" });
        parallax_two.css({ 'margin-bottom': offset / 4 + "px" });
        parallax_three.css({ 'margin-bottom': offset / 3 + "px" });
        parallax_four.css({ 'margin-bottom': offset / 2 + "px" });
        parallax_five.css({ 'margin-bottom': offset + "px" });
        ticking = false;
        //As this is the final function to run in the setup, we trigger the sunrise animation
      });
    }
    ticking = true;
  });
}

function page_sunrise(world) {
  resetScroll();
  $('#header img').hide();
  var top = $(window).scrollTop(0) || $("body").scrollTop(0);
  $('#the_cans .image img').each(function () {
    $(this).css({ 'height': 'inherit', 'width': 'inherit' });
  });
  body.classList.remove('transitioning', 'transition-setup', 'transition-start');
  $('.target_parent').each(function () {
    $(this).removeClass('target_parent');
    console.log(8);
  });
  $('.target_world').removeClass('target_world');
  setTimeout(function () {
    $('#header img').fadeIn(3000, function () {
      body.classList.add('sunrise');
    });
    target.closest('.can').css({ 'opacity': 1 });
    console.log(9);
    //We're done, re-enable the transition links
    transitioning = false;
  }, 500);
}

//Tools
function getNavUrl() {
  //Get Url
  return window.location.search.replace("?", "");
}
function getParameters(url) {
  //Params obj
  var params = {};
  //To lowercase
  url = url.toLowerCase();
  //To array
  url = url.split('&');

  //Iterate over url parameters array
  var length = url.length;
  for (var i = 0; i < length; i++) {
    //Create prop
    var prop = url[i].slice(0, url[i].search('='));
    //Create Val
    var value = url[i].slice(url[i].search('=')).replace('=', '');
    //Params New Attr
    params[prop] = value;
  }
  return params;
}

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]').not('[href="#0"]').click(function (event) {
  // On-page links
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function () {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) {
          // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        }
      });
    }
  }
});
