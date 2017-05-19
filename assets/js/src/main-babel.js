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
var html = document.documentElement,
    body = document.body,
    nav = document.getElementById('nav'),
    header = document.getElementById('header'),
    sun = document.getElementById('sun'),
    lede = document.querySelector('#welcome .lede'),
    introduction = document.querySelector('#welcome .introduction'),
    parallax_one,
    parallax_two,
    parallax_three,
    parallax_four,
    parallax_five,
    target,
    can_parent,
    image_parent;

//General variables
var transitioning = false;
var swapping = false;
var worldData;
var fix_header;
var windowHeight = $(window).height();
var windowWidth = $(window).width();
var event_stop_one = false;
var event_stop_two = false;
var event_stop_three = false;

function recache_elements() {
  html = document.documentElement;
  body = document.body;
  nav = document.getElementById('nav');
  header = document.getElementById('header');
  sun = document.getElementById('sun');
  lede = document.querySelector('#welcome .lede');
  introduction = document.querySelector('#welcome .introduction');
  transitioning = false;
  swapping = false;
  windowHeight = $(window).height();
  windowWidth = $(window).width();
}
//Kick everything off
function launch_page() {
  $('.world_info').hide();
  $.getJSON(wordpress.template_directory + "/worlds.json", function (data) {
    console.log('Worlds loaded');
    worldData = data;
    var get = getParameters(getNavUrl());
    setupParallax(get.world);
    animate_stage();
  });
}

// Page scrolling effects
var last_scroll = windowHeight / 100;
var ticking = false;

function resetScroll() {
  nav.classList.add('hide');
  last_scroll = 0;
}
function animate_stage() {
  body.classList.add('sunrise');
  setTimeout(function () {
    html.classList.add('daytime');
    nav.classList.add('hide');
  }, 5500);
}

$("#mobile-menu").click(function () {
  $(this).parent().toggleClass('open');
});

$("#nav a").click(function () {
  $('#nav').removeClass('open');
});
/*
Transitioning between worlds
*/

//This handles the initial button click
$(".explore-button a").click(function () {
  if (transitioning === false) {
    transitioning = true;
    target = $("#" + this.getAttribute("target"));
    $('#the_cans .image img').each(function () {
      $(this).css({ 'height': $(this).height(), 'width': $(this).width() });
    });
    $('.world_info').show();
    target.parents().addClass('target_parent');
    target.addClass('target_world');
    html.classList.add('transition-start');
    body.classList.remove('sunrise');

    //Cache a couple of elements here to reduce DOM lookup
    can_parent = $('.can.target_parent');
    image_parent = $('.image.target_parent');

    //Wait for the fade out to have occured finished before continuing
    $(header).one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function (e) {
      transitionAnimation();
    });
  }
  return false;
});

//Animate the can slide and intro text entrance
function transitionAnimation() {

  //Sometimes get a duplicate event, despite using 'once', as animate header during transition. Force unbind of header transition event
  $(header).unbind("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd");

  $('html, body').animate({
    scrollTop: image_parent.offset().top - windowHeight / 2 + image_parent.height() / 2
  }, 1000, function () {
    if (event_stop_one === false) {
      event_stop_one = true;
      can_parent.css({ 'width': can_parent.width(), 'left': can_parent.offset().left, 'top': '50%', 'transform': 'translateY(-50%)', 'position': 'fixed' });
      //Move can to the right, wait for that animation to complete before proceeding
      html.classList.remove('daytime');
      console.log('REPEAT');
      html.classList.add('transition-move');
      if ($('#the_cans').length) {
        image_parent.one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function (e) {
          if (event_stop_two === false) {
            event_stop_two = true;
            html.classList.add('transitioning');
            //Wait for the animations to finish before start heavy lifting, to avoid stutter
            can_parent.find('.loading').one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function (e) {
              if (event_stop_three === false) {
                event_stop_three = true;
                refreshElements();
              }
            });
          }
        });
      } else {
        if (event_stop_two === false) {
          event_stop_two = true;
          html.classList.add('transitioning');
          //Wait for the animations to finish before start heavy lifting, to avoid stutter
          can_parent.find('.loading').one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function (e) {
            if (event_stop_three === false) {
              event_stop_three = true;
              refreshElements();
            }
          });
        }
      }
    }
  });
}

//Load elements from World.json and add to a string (so we aren't adding single elements multiple times to the DOM)
function refreshElements() {
  var world = $(target).attr("data-world");
  var elements = worldData[world];
  var newHTML = '';
  var name;
  $.each(elements, function (key, value) {
    if (world === 'default') {
      name = key;
    } else {
      name = world + '_' + key;
    }
    if (Array.isArray(value)) {
      console.log(value);
      newHTML += "<picture id=\"" + name + "\">\n                    <source\n                      media=\"all and (orientation: landscape)\"\n                      srcset=\"" + wordpress.template_directory + value[0] + "\">\n                    <source\n                      media=\"all and (orientation: portrait)\"\n                      srcset=\"" + wordpress.template_directory + value[1] + "\">\n                    <img\n                      src=\"" + wordpress.template_directory + value[1] + "\">\n                  </picture>";
    } else {
      newHTML += "<picture id=\"" + name + "\">\n                    <source\n                      media=\"all and (orientation: landscape)\"\n                      srcset=\"" + wordpress.template_directory + value + "\" class=\"landscape_only\">\n                    <source\n                      media=\"all and (orientation: portrait)\"\n                      srcset=\"" + wordpress.template_directory + "/assets/img/worlds/blank.gif\">\n                    <img\n                      src=\"" + wordpress.template_directory + value + "\" class=\"landscape_only\">\n                  </picture>";
    }
  });

  //Fade out the can and introduce the button to trigger page load
  target.animate({
    'opacity': 0
  }, {
    duration: 1000,
    start: function start() {
      $('body').removeClass('midnight').removeClass('default').removeClass('dayglo').removeClass('mother');
      body.classList.add(world);
    },
    complete: function complete() {
      switchWorld(world, newHTML);
      //"Unlock" the variables we used to stop the process duplicating
      event_stop_one = false;
      event_stop_two = false;
      event_stop_three = false;
    }
  });
}

//Add new copy and elements to DOM
function switchWorld(world, html) {
  header.innerHTML = html;
  lede.innerHTML = worldData.copy[world].lede;
  introduction.innerHTML = worldData.copy[world].introduction;
  Pace.restart();
  Pace.once('done', function () {
    //Now elements added, attach all parallax classes. We pass next step as a callback.
    setupParallax(world);
    page_sunrise(world);
  });
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
      $(prefix + entries[i] + ' img').addClass('parallax_' + layer);
      delete record[entries[i]];
    }
  });
  $.each(record, function (element) {
    $(prefix + element + ' img').addClass('parallax_five').css({ 'position': 'fixed' });
  });
  parallax_one = $('.parallax_one');
  parallax_two = $('.parallax_two');
  parallax_three = $('.parallax_three');
  parallax_four = $('.parallax_four');
  parallax_five = $('.parallax_five');

  //Attach parallax scroll handler event
  setup_scroll(world);
}

function setup_scroll(world) {
  window.addEventListener('scroll', function (e) {
    if (!ticking) {
      ticking = true;
      this_scroll = $(window).scrollTop();
      if (!fix_header) {
        if (this_scroll >= last_scroll * 1.1) {
          nav.classList.add('hide');
          last_scroll = this_scroll;
        } else if (this_scroll <= last_scroll / 1.1) {
          nav.classList.remove('hide');
          last_scroll = this_scroll;
        }
      }
      window.requestAnimationFrame(function () {
        var offset = this_scroll * 1;
        parallax_one.css({ 'transform': "translateY(" + offset / 5 + "px)" });
        parallax_two.css({ 'transform': "translateY(" + offset / 4 + "px)" });
        parallax_three.css({ 'transform': "translateY(" + offset / 3 + "px)" });
        parallax_four.css({ 'transform': "translateY(" + offset / 2 + "px)" });
        //  parallax_five.css({'transform': "translateY(" + offset + "px)"});
        ticking = false;
        //As this is the final function to run in the setup, we trigger the sunrise animation
      });
    }
  });
}

function page_sunrise(world) {
  resetScroll();
  var top = $(window).scrollTop(0) || $("body").scrollTop(0);
  $('body').fadeOut(500, function () {
    $('#the_cans .image img').each(function () {
      $(this).css({ 'height': '', 'width': '' });
    });
    can_parent.css({ 'width': '', 'left': '', 'top': '', 'transform': '', 'position': '' });
    $('html').removeClass('transition-setup').removeClass('transition-start').removeClass('transition-move').removeClass('transitioning');
    $('.target_parent').each(function () {
      $(this).removeClass('target_parent');
    });
    $('.world_info').hide();
    $('.target_world').removeClass('target_world');
    target.css({ 'opacity': '1' });
    body.classList.add('sunrise');
    $('body').fadeIn(1500);
    setTimeout(function () {
      html.classList.add('daytime');
      can_parent.css({ 'opacity': 1 });
      recache_elements();
      //We're done, re-enable the transition links
      transitioning = false;
      console.log('Transitioning toggled');
    }, 5000);
  });
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

$('a[href*="#"]').not('[href="#"]').click(function (event) {
  // On-page links
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      fix_header = true;
      $('html, body').animate({
        scrollTop: target.offset().top - $('#nav').height()
      }, 1000, function () {
        fix_header = false;
        nav.classList.remove('hide');
        last_scroll = window.scrollY;
      });
    }
  }
});
