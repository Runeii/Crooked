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
var body = document.body,
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
var worldData;

//Kick everything off
$.getJSON( "worlds.json", function( data ) {
  console.log('Worlds loaded');
  worldData = data;
  setupParallax();
});

// Page scrolling effects
var last_scroll;
var ticking = false;
window.addEventListener('scroll', function(e) {
  this_scroll = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
        var offset = this_scroll * -1;
        parallax_one.css({'margin-bottom': (offset / 5)  + "px"});
        parallax_two.css({'margin-bottom': (offset / 4) + "px"});
        parallax_three.css({'margin-bottom': (offset / 3) + "px"});
        parallax_four.css({'margin-bottom': (offset / 2) + "px"});
        parallax_five.css({'margin-bottom': offset + "px", 'margin-top': this_scroll + "px"});
      ticking = false;
    });
  }
  ticking = true;
});

//Animation work
document.addEventListener('DOMContentLoaded', function() {
    body.classList.add('sunrise');
    setTimeout(function(){
        body.classList.add('daytime');
     }, 5000);
});

$( ".explore-button a" ).click(function() {
  if(transitioning === false) {
    transitioning = true;
    var target = $( "#" + this.getAttribute("target"));
    target.parents().addClass('target_parent');
    target.css({
      'top' : target.offset().top - $(window).scrollTop(),
      'left' : target.offset().left,
      'width' : target.width(),
      'position' : 'fixed'
    }).queue(function() {
      //Don't set class until CSS properties added
      target.addClass('target_world');
      body.classList.add('transitioning');
      $(this).dequeue();
    });
    target.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',function(e) {
      swapWorld(target);
    });
  }
  return false;
});

function swapWorld(target) {
  var newWorld = $(target).attr("world");
  console.log('Now entering: ' + newWorld);
  $(window).scrollTop(0);
  header.classList.add('entering');
  body.className = newWorld;
  console.log(target);
  target[0].style.cssText = null;
  body.classList.remove('transitioning');
  refreshElements(newWorld);
}

function refreshElements(world){
  var elements = data[world];
  var newHTML = '';
  header.innerHTML = '';
  $.each(elements, function(key, value){
    newHTML += '<img src="'+ value +'" id="'+ world +'_'+ key +'"/>';
  });
  header.innerHTML = newHTML;
  lede.innerHTML = worldData.copy[world].lede;
  introduction.innerHTML = worldData.copy[world].introduction;
  setupParallax(world);
}

function setupParallax(world = 'default') {
  var layers = worldData.layers[world];
  var record = worldData[world];
  $.each(layers, function(layer, entries){
    for (var i = 0, len = entries.length; i < len; i++) {
      $('#' + entries[i]).addClass('parallax_' + layer);
      delete record[entries[i]];
    }
  });
  $.each(record, function(element){
    $('#' + element).addClass('parallax_five');
  });
  parallax_one = $('.parallax_one');
  parallax_two = $('.parallax_two');
  parallax_three = $('.parallax_three');
  parallax_four = $('.parallax_four');
  parallax_five = $('.parallax_five');
}
