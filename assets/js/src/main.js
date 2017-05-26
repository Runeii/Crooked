//Test features
var passiveSupported = false;
try {
  var options = Object.defineProperty({}, "passive", {
    get: function() {
      passiveSupported = true;
    }
  });
  window.addEventListener("test", null, options);
} catch(err) {}

//Cache elements
var html = document.documentElement,
    body = document.body,
    nav = document.getElementById('nav'),
    header = document.getElementById('header'),
    sun = document.getElementById('sun'),
    lede = document.querySelector('#welcome .lede'),
    introduction = document.querySelector('#welcome .introduction'),
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
var event_stop_three  = false;
var stalks_active = false;

function recache_elements(){
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
function launch_page(){
  $.getJSON( wordpress.template_directory + "/worlds.json", function( data ) {
    worldData = data;
    var get = getParameters(getNavUrl());
    setupParallax(get.world);
    setup_stalks();
    click_eye();
    animate_stage();
  });

}
launch_page();

function setup_stalks(){
  $().connections({from: '#midnight_eye', to: '#midnight_can', class: 'stalk', within: '#midnight_slot'});
  $().connections({from: '#dayglo_eye', to: '#dayglo_can', class: 'stalk', within: '#dayglo_slot'});
  $().connections({from: '#mother_eye', to: '#mother_can', class: 'stalk', within: '#mother_slot'});
  connections = $('connection');
  stalks_active = true;
  setTimeout(function(){ update_stalks(); }, 50);
}

function update_stalks(){
  window.requestAnimationFrame(function() {
    if(stalks_active === true) {
      connections.connections('update');
      update_stalks();
    }
  });
}

// Page scrolling effects
var last_scroll = windowHeight / 100;
var ticking = false;

function resetScroll(){
  last_scroll = 0;
}
function animate_stage(){
  body.classList.add('sunrise');
  setTimeout(function(){
      html.classList.add('daytime');
   }, 5500);
}

$( "#mobile-menu" ).click(function() {
  $(this).parent().toggleClass('open');
});

$( "#nav a" ).click(function() {
  $('#nav').removeClass('open');
});

/*
Transitioning between worlds
*/
$( ".can_tooltip" ).on('mouseover mouseout', function(){
    $(this).siblings().toggleClass('hover');
});

function click_eye(){
  var eyes = document.querySelectorAll( ".can_tooltip");
  var handler = function(eye){
    eye.addEventListener("click", function(e){
      switch_world(e);
    });
  };
  for(var i=0;i<eyes.length;i++){
    handler(eyes[i]);
  }
}

function switch_world(e) {
  var eye = e.target;
  if(transitioning === false) {
    transitioning = true;
    stalks_active = false;
    connections.connections('remove');
    target = eye.getAttribute("data-world");
    eye.classList.add('notransition');

    eye.style.top = eye.getBoundingClientRect().top + 'px';
    eye.style.left = eye.getBoundingClientRect().left + 'px';
    eye.style.position = 'fixed';

    $(html).addClass('transition-stage-pre');
    //Weird hack to force reflow and avoid transition
    $(eye).offset();
    eye.classList.remove('notransition');
    eye.classList.add('target');
    $(html).addClass('transition-stage-1');
    $(eye).one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',function(e) {
      $('html,body').scrollTop(0);
      $(window).scrollTop(0);
      cleanBodyClasses(target);
      //Callback in this next function progresses animation
      replaceElements(target);
      eye.classList.remove('target');
    });
  }
  e.preventDefault();
  return false;
}

function replaceElements(target){
  console.log(target);
  header.innerHTML = '';
  $("#header").load(wordpress.template_directory + '/world_data/selector.php', {world: target, directory: wordpress.template_directory}, function(){
    //We need to wait for loading to be complete
    $(html).addClass('transition-stage-2');
    $('#hill_one').one('animationend webkitAnimationEnd oAnimationEnd oanimationend MSAnimationEnd',function(e) {
      click_eye();
      setup_stalks();
      $(html).removeClass('transition-stage-pre');
      $(html).removeClass('transition-stage-1');
      $(html).removeClass('transition-stage-2');
      $(html).removeClass('transition-stage-2');
    });
  });
}

function cleanBodyClasses(target){
  body.classList.remove('default');
  body.classList.remove('dayglo');
  body.classList.remove('mother');
  body.classList.remove('midnight');
  body.classList.add(target);
}

function setupParallax(world){
  window.addEventListener('scroll', function(e) {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(function() {
        this_scroll = $(window).scrollTop();
        var layers = document.getElementsByClassName("parallax");
        var layer, speed, yPos;
        for (var i = 0; i < layers.length; i++) {
          layer = layers[i];
          speed = layer.getAttribute('data-speed');
          layer.setAttribute('style', 'transform: translate3d(0px, ' + (this_scroll * (2 / speed)) + 'px, 0px)');
        }
        ticking = false;
      });
    }
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
    for(var i=0; i<length; i++) {
        //Create prop
        var prop = url[i].slice(0, url[i].search('='));
        //Create Val
        var value = url[i].slice(url[i].search('=')).replace('=', '');
        //Params New Attr
        params[prop] = value;
    }
    return params;
}

$('a[href*="#"]').not('[href="#"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - $('#nav').height()
        }, 1000, function(){
          last_scroll = window.scrollY;
        });
      }
    }
  });
