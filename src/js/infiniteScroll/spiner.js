import { Spinner } from 'spin.js';
import { refs } from './refs';
const opts = {
  lines: 5, // The number of lines to draw
  length: 49, // The length of each line
  width: 12, // The line thickness
  radius: 45, // The radius of the inner circle
  scale: 1.45, // Scales overall size of the spinner
  corners: 0.7, // Corner roundness (0..1)
  speed: 2.2, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#a7dd13', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};
const spinner = new Spinner(opts);
export function spinerPlay() {
  refs.backdrop.classList.remove('is-hidden');

  spinner.spin(refs.spiner);
}

export function spinerStop() {
  spinner.stop();
  refs.backdrop.classList.add('is-hidden');
}
