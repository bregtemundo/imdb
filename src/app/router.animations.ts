import {trigger, state, animate, style, transition} from '@angular/animations';

export function routerTransition() {
  return slideToLeft();
}

export function swapTransition() {
  return textSwap();
}

function slideToLeft() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%'}) ),
    state('*', style({position:'fixed', width:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateX(100%)', Zindex: 2}),
      animate('1.1s cubic-bezier(0.215, 0.610, 0.355, 1.000)', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)', overflow: 'hidden'}),
      animate('1.8s cubic-bezier(0.165, 0.840, 0.440, 1.000)', style({transform: 'translateX(-100%)'}))
    ])
  ]);
}


function textSwap() {
  return trigger('swapTransition', [
    state('void', style({position:'absolute'}) ),
    state('*', style({position:'absolute'}) ),
    transition(':enter', [
      style({transform: 'translateY(-100%)'}),
      animate('.8s cubic-bezier(0.190, 1.000, 0.220, 1.000)', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('.6s cubic-bezier(0.165, 0.840, 0.440, 1.000)', style({transform: 'translateY(100%)'}))
    ])
  ]);
}