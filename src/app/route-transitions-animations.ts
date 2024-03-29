import {animate, group, query, style, transition, trigger} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    // Topslide
    transition('Login => *, * => Details', [
      query(':enter, :leave',
        style({position: 'fixed', width: '100%'}),
        {optional: true}),
      group([
        query(':enter', [
          style({transform: 'translateY(100%)'}),
          animate('0.5s ease-in-out',
            style({transform: 'translateY(0%)'}))
        ], {optional: true}),
        query(':leave', [
          style({transform: 'translateY(0%)'}),
          animate('0.5s ease-in-out',
            style({transform: 'translateY(-100%)'}))
        ], {optional: true}),
      ])
    ]),
    // BottomSlide
    transition('Details => *, Signup => *', [
      query(':enter, :leave',
        style({position: 'fixed', width: '100%'}),
        {optional: true}),
      group([
        query(':enter', [
          style({transform: 'translateY(-100%)'}),
          animate('0.5s ease-in-out',
            style({transform: 'translateY(0%)'}))
        ], {optional: true}),
        query(':leave', [
          style({transform: 'translateY(0%)'}),
          animate('0.5s ease-in-out',
            style({transform: 'translateY(+100%)'}))
        ], {optional: true}),
      ])
    ]),
    // Rightslide
    transition('Home => *, * => Profile', [
      query(':enter, :leave',
        style({position: 'fixed', width: '100%'}),
        {optional: true}),
      group([
        query(':enter', [
          style({transform: 'translateX(100%)'}),
          animate('0.5s ease-in-out',
            style({transform: 'translateX(0%)'}))
        ], {optional: true}),
        query(':leave', [
          style({transform: 'translateX(0%)'}),
          animate('0.5s ease-in-out',
            style({transform: 'translateX(-100%)'}))
        ], {optional: true}),
      ])
    ]),
    // Leftslide
    transition('Profile => *', [
      query(':enter, :leave',
        style({position: 'fixed', width: '100%'}),
        {optional: true}),
      group([
        query(':enter', [
          style({transform: 'translateX(-100%)'}),
          animate('0.5s ease-in-out',
            style({transform: 'translateX(0%)'}))
        ], {optional: true}),
        query(':leave', [
          style({transform: 'translateX(0%)'}),
          animate('0.5s ease-in-out',
            style({transform: 'translateX(100%)'}))
        ], {optional: true}),
      ])
    ]),
  ]);

