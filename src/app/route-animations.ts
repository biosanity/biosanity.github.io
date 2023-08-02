import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';


export const slider =
trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        opacity: 1
      })
    ]),
    query(':enter', [
      style({ transform: 'translateX(-100%)', opacity: 0 })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('0ms', style({ opacity: 0 }))
      ]),
      query(':enter', [
        animate('400ms', keyframes([
          style({ transform: 'translateX(-100%)', opacity: 0, offset: 0 }),
          style({ transform: 'translateX(0)', opacity: 1, offset: 0.7 }),
          style({ transform: 'translateX(-8px)', offset: 0.9 }),
          style({ transform: 'translateX(0)', offset: 1 })
        ]))
      ])
    ]),
    query(':enter', animateChild()),
  ]),
]);
