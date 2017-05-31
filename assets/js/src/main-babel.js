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
    overlay = document.getElementById('overlays'),
    welcome = document.getElementById('welcome'),
    connections,
    target,
    can_parent,
    image_parent;

//General variables
var transitioning = false;
var swapping = false;
var worldData;
var windowHeight = $(window).height();
var windowWidth = $(window).width();
var event_stop_one = false;
var event_stop_two = false;
var event_stop_three = false;
var stalks_active = false;
var get = getParameters(getNavUrl());

if (get.world === null || get.world === undefined) {
  get.world = 'default';
}

function recache_elements() {
  html = document.documentElement;
  body = document.body;
  nav = document.getElementById('nav');
  header = document.getElementById('header');
  sun = document.getElementById('sun');
  lede = document.querySelector('#welcome .lede');
  introduction = document.querySelector('#welcome .introduction');
  transitioning = false;
  overlay = document.getElementById('overlays');
  welcome = document.getElementById('welcome');
  layers = null;
  swapping = false;
  windowHeight = $(window).height();
  windowWidth = $(window).width();
}

//Kick everything off
function launch_page() {
  $.getJSON(wordpress.template_directory + "/worlds.json", function (data) {
    worldData = data;
    setup_stalks();
    refresh_layout();
    var myLazyLoad = new LazyLoad();
  });
}
launch_page();

function refresh_layout() {
  recache_elements();
  if (window.innerHeight < window.innerWidth) {
    setupParallax(get.world);
  } else {
    window.removeEventListener('scroll', parallaxFrame);
  }
  layout_header();
  click_eye();
  animate_stage();
}

$(window).resize(function () {
  refresh_layout();
});

function setup_stalks() {
  $().connections({ from: '#midnight_eye', to: '#midnight_can', class: 'stalk', within: '#midnight_slot' });
  $().connections({ from: '#dayglo_eye', to: '#dayglo_can', class: 'stalk', within: '#dayglo_slot' });
  $().connections({ from: '#mother_eye', to: '#mother_can', class: 'stalk', within: '#mother_slot' });
  connections = $('connection');
  stalks_active = true;
  setTimeout(function () {
    update_stalks();
  }, 50);
}

function update_stalks() {
  window.requestAnimationFrame(function () {
    if (stalks_active === true) {
      connections.connections('update');
      update_stalks();
    }
  });
}

// Page scrolling effects
var last_scroll = windowHeight / 100;
var ticking = false;

function resetScroll() {
  last_scroll = 0;
}
function animate_stage() {
  body.classList.add('sunrise');
  setTimeout(function () {
    html.classList.add('daytime');
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
$(".can_tooltip").on('mouseover mouseout', function () {
  $(this).siblings().toggleClass('hover');
});

function click_eye() {
  var eyes = document.querySelectorAll(".can_tooltip");
  var handler = function handler(eye) {
    eye.addEventListener("click", function (e) {
      switch_world(e);
    });
    eye.addEventListener("tap", function (e) {
      switch_world(e);
    });
  };
  for (var i = 0; i < eyes.length; i++) {
    handler(eyes[i]);
  }
}

function switch_world(e) {
  var eye = e.target;
  if (transitioning === false) {
    transitioning = true;
    stalks_active = false;
    connections.connections('remove');
    target = eye.getAttribute("data-world");
    eye.classList.add('notransition');

    //IE11 Fix
    if (navigator.userAgent.match(/Trident\/7\./) || eye.classList.contains('single_world')) {
      IE_positionEye(eye);
    }
    eye.style.position = 'fixed';

    $(html).addClass('transition-stage-pre');
    //Weird hack to force reflow and avoid transition
    $(eye).offset();
    eye.classList.remove('notransition');
    $(html).addClass('transition-stage-1');
    eye.classList.add('target');
    console.log('Visible?3');
    $(eye).one('animationend webkitAnimationEnd oAnimationEnd oanimationend MSAnimationEnd', function (e) {
      $('html,body').scrollTop(0);
      $(window).scrollTop(0);
      cleanBodyClasses(target);
      //Callback in this next function progresses animation
      replaceElements(target);
      eye.classList.remove('target');
      eye.style.top = "";
      eye.style.left = "";
      eye.style.position = 'absolute';
    });
  }
  e.preventDefault();
  return false;
}

function replaceElements(target) {
  header.innerHTML = '';
  console.log('Visible1?');
  $("#header").load(wordpress.template_directory + '/world_data/selector.php', { world: target, directory: wordpress.template_directory }, function () {
    //We need to wait for loading to be complete
    get.world = target;
    refresh_layout();
    updateMenu(target);
    console.log('Visible2?');
    $(html).addClass('transition-stage-2');
    $('#hill_one').one('animationend webkitAnimationEnd oAnimationEnd oanimationend MSAnimationEnd', function (e) {
      setup_stalks();
      console.log('Visible?5');
      $(html).removeClass('transition-stage-pre');
      $(html).removeClass('transition-stage-1');
      $(html).removeClass('transition-stage-2');
      $(html).removeClass('transition-stage-2');
      transitioning = false;
    });
  });
}

function layout_header() {
  header.style.height = null;
  header.style.borderTop = null;
  if (overlay !== null) {
    overlay.style.top = null;
    header.style.height = header.clientHeight + welcome.clientHeight + 'px';
    header.style.borderTop = welcome.clientHeight + 'px solid transparent';
    overlay.style.top = -1 * (welcome.clientHeight - 1.5 * nav.clientHeight) + 'px';
  }
}

function updateMenu(target) {
  if (target != 'default') {
    document.getElementById('products_nav').text = 'About';
    document.getElementById('about_nav').text = 'Other flavours';
    $("#about_nav").attr("href", wordpress.home_url + "#welcome");
  } else {
    document.getElementById('products_nav').text = 'Products';
    document.getElementById('about_nav').text = 'About';
    $("#about_nav").attr("href", wordpress.home_url + "#welcome_main");
  }
}
function cleanBodyClasses(target) {
  body.classList.remove('default');
  body.classList.remove('dayglo');
  body.classList.remove('mother');
  body.classList.remove('midnight');
  body.classList.add(target);
}

var layers = null;
var parallaxFrame = function parallaxFrame() {
  if (!ticking) {
    if (layers === null) {
      if (navigator.userAgent.match(/Trident\/7\./)) {
        layers = document.querySelectorAll('.parallax:not([data-speed="2"]):not(#overlays)');
      } else {
        layers = document.getElementsByClassName("parallax");
      }
    }
    window.requestAnimationFrame(function () {
      if (body.classList.contains('default')) {
        this_scroll = $(window).scrollTop();
      } else {
        this_scroll = $(window).scrollTop() - parseInt(header.style.borderTopWidth);
      }
      if (this_scroll >= 0) {
        var layer, speed, yPos;
        for (var i = 0; i < layers.length; i++) {
          layer = layers[i];
          speed = layer.getAttribute('data-speed');
          layer.style.transform = 'translate3d(0px, ' + this_scroll * (3 / speed) + 'px, 0px)';
        }
      } else {
        for (var y = 0; y < layers.length; y++) {
          layers[y].style.transform = 'translate3d(0px, 0px, 0px)';
        }
      }
      ticking = false;
    });
    ticking = true;
  }
};

function setupParallax(world) {
  window.removeEventListener('scroll', parallaxFrame);
  window.addEventListener('scroll', parallaxFrame);
}

//Tools
if (!Math.sign) {
  Math.sign = function (x) {
    x = +x; // convert to a number
    if (x === 0 || isNaN(x)) {
      return Number(x);
    }
    return x > 0 ? 1 : -1;
  };
}
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
      $('html, body').animate({
        scrollTop: target.offset().top - $('#nav').height()
      }, 1000, function () {
        last_scroll = window.scrollY;
      });
    }
  }
});

///////////////////////////////
/* Browser specifix fixes */
////////////////////////////////

//Improve scrolling in IE11
smooth_scrolling = false;
if (navigator.userAgent.match(/Trident\/7\./)) {
  $('body').on("mousewheel", function (event) {
    event.preventDefault();
    if (smooth_scrolling === false) {
      smooth_scrolling = true;
      var wd = event.originalEvent.wheelDelta;
      var csp = window.pageYOffset;
      $('html, body').animate({
        scrollTop: csp - wd * 2
      }, Math.abs(wd) * 2, function () {
        smooth_scrolling = false;
      });
    }
  });
}
function IE_positionEye(eye) {
  eye.style.top = eye.getBoundingClientRect().top + 'px';
  eye.style.left = eye.getBoundingClientRect().left + 'px';
}
