import { animate, onScroll, stagger } from 'https://cdn.jsdelivr.net/npm/animejs/+esm';

console.log('hello');

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom-=50 top',
    leave: 'top+=60 bottom',
    sync: .25,
    debug: true,
  })
});
