import { animate, onScroll, stagger } from 'https://cdn.jsdelivr.net/npm/animejs/+esm';

console.log('hello');

animate('.dev-char', {
  translateY: [10, 0], // Slide up from 10px below
  opacity: [0, 1],     // Fade in
  duration: 800,       // Duration of each character animation
  delay: stagger(100), // Delay between each character starting (ms)
  easing: 'easeOutExpo' // Animation easing function
});
