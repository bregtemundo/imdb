"use strict";
var animations_1 = require("@angular/animations");
function routerTransition() {
    return slideToLeft();
}
exports.routerTransition = routerTransition;
function swapTransition() {
    return textSwap();
}
exports.swapTransition = swapTransition;
function slideToRight() {
    return animations_1.trigger('routerTransition', [
        animations_1.state('void', animations_1.style({ position: 'fixed', width: '100%' })),
        animations_1.state('*', animations_1.style({ position: 'fixed', width: '100%' })),
        animations_1.transition(':enter', [
            animations_1.style({ transform: 'translateX(-100%)' }),
            animations_1.animate('0.5s ease-in-out', animations_1.style({ transform: 'translateX(0%)' }))
        ]),
        animations_1.transition(':leave', [
            animations_1.style({ transform: 'translateX(0%)' }),
            animations_1.animate('0.5s ease-in-out', animations_1.style({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return animations_1.trigger('routerTransition', [
        animations_1.state('void', animations_1.style({ position: 'fixed', width: '100%' })),
        animations_1.state('*', animations_1.style({ position: 'fixed', width: '100%' })),
        animations_1.transition(':enter', [
            animations_1.style({ transform: 'translateX(100%)', Zindex: 2 }),
            animations_1.animate('1.1s cubic-bezier(0.215, 0.610, 0.355, 1.000)', animations_1.style({ transform: 'translateX(0%)' }))
        ]),
        animations_1.transition(':leave', [
            animations_1.style({ transform: 'translateX(0%)', overflow: 'hidden' }),
            animations_1.animate('.8s cubic-bezier(0.165, 0.840, 0.440, 1.000)', animations_1.style({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return animations_1.trigger('routerTransition', [
        animations_1.state('void', animations_1.style({ position: 'fixed', width: '100%', height: '100%' })),
        animations_1.state('*', animations_1.style({ position: 'fixed', width: '100%', height: '100%' })),
        animations_1.transition(':enter', [
            animations_1.style({ transform: 'translateY(-100%)' }),
            animations_1.animate('0.5s ease-in-out', animations_1.style({ transform: 'translateY(0%)' }))
        ]),
        animations_1.transition(':leave', [
            animations_1.style({ transform: 'translateY(0%)' }),
            animations_1.animate('0.5s ease-in-out', animations_1.style({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return animations_1.trigger('routerTransition', [
        animations_1.state('void', animations_1.style({ position: 'fixed', width: '100%', height: '100%' })),
        animations_1.state('*', animations_1.style({ position: 'fixed', width: '100%', height: '100%' })),
        animations_1.transition(':enter', [
            animations_1.style({ transform: 'translateY(100%)' }),
            animations_1.animate('0.5s ease-in-out', animations_1.style({ transform: 'translateY(0%)' }))
        ]),
        animations_1.transition(':leave', [
            animations_1.style({ transform: 'translateY(0%)' }),
            animations_1.animate('0.5s ease-in-out', animations_1.style({ transform: 'translateY(-100%)' }))
        ])
    ]);
}
function textSwap() {
    return animations_1.trigger('swapTransition', [
        animations_1.state('void', animations_1.style({ position: 'absolute' })),
        animations_1.state('*', animations_1.style({ position: 'absolute' })),
        animations_1.transition(':enter', [
            animations_1.style({ transform: 'translateY(-100%)' }),
            animations_1.animate('.8s cubic-bezier(0.190, 1.000, 0.220, 1.000)', animations_1.style({ transform: 'translateY(0%)' }))
        ]),
        animations_1.transition(':leave', [
            animations_1.style({ transform: 'translateY(0%)' }),
            animations_1.animate('.6s cubic-bezier(0.165, 0.840, 0.440, 1.000)', animations_1.style({ transform: 'translateY(100%)' }))
        ])
    ]);
}
//# sourceMappingURL=router.animations.js.map