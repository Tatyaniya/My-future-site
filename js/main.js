const parallaxContainer = document.getElementById('parallax');
const layers = parallaxContainer.children;

const moveLayers = function (e) {
    const initialX = (window.innerWidth / 2) - e.pageX;
    const initialY = (window.innerHeight / 2) - e.pageY;

    let i = 0;
    for (let layer of layers) {
        const divider = i/40;
        const positionX = initialX * divider;
        const positionY = initialY * divider;
        const bottomPosition = (window.innerHeight / 2) * divider;
        const image = layer.firstElementChild;

        layer.style.transform = `translate(${positionX}px, ${positionY}px)`;
        image.style.bottom = `-${bottomPosition}px`;
        i++;
    }
};

window.addEventListener('mousemove', moveLayers);

$(function () {
    
    $(window).on('load', function () {
        var $title = $('.offer__title');
        $title.addClass('bounceInDown').css('opacity', '1');

        var $desc = $('.offer__desc');
        $desc.addClass('bounceInLeft').css('opacity', '1');

        var $text = $('.offer__text');
        $text.addClass('bounceInRight').css('opacity', '1');

        var $subtitle = $('.offer__subtitle');
        $subtitle.addClass('bounceInUp').css('opacity', '1');

        var $list = $('.offer__list');
        $list.addClass('bounceInUp').css('opacity', '1');

        var $corner = $('.corner');
        $corner.css('opacity', '1');

        var $snow = $('.snow');
        $snow.css('opacity', '1');
    });
});

var w = window.innerWidth,
h = window.innerHeight,
canvas = document.getElementById('snow'),
ctx = canvas.getContext('2d'),
rate = 50,
arc = 500,
time,
count,
size = 2,
speed = 10,
lights = new Array,
colors = ['#eee'];

canvas.setAttribute('width',w);
canvas.setAttribute('height',h);

function init() {
  time = 0;
  count = 0;

  for(var i = 0; i < arc; i++) {
    lights[i] = {
      x: Math.ceil(Math.random() * w),
      y: Math.ceil(Math.random() * h),
      toX: Math.random() * 5 + 1,
      toY: Math.random() * 5 + 1,
      c: colors[Math.floor(Math.random()*colors.length)],
      size: Math.random() * size
    }
  }
}

function bubble() {
  ctx.clearRect(0,0,w,h);

  for(var i = 0; i < arc; i++) {
    var li = lights[i];

    ctx.beginPath();
    ctx.arc(li.x,li.y,li.size,0,Math.PI*2,false);
    ctx.fillStyle = li.c;
    ctx.fill();

    li.x = li.x + li.toX * (time * 0.05);
    li.y = li.y + li.toY * (time * 0.05);

    if(li.x > w) { li.x = 0; }
    if(li.y > h) { li.y = 0; }
    if(li.x < 0) { li.x = w; }
    if(li.y < 0) { li.y = h; }
  }
  if(time < speed) {
    time++;
  }
  timerID = setTimeout(bubble,1000/rate);
}
init();
bubble();