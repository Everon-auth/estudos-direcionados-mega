"use strict";
exports.__esModule = true;
exports.fadeState = void 0;
var animations_1 = require("@angular/animations");
exports.fadeState = animations_1.trigger('fadeState', [
    animations_1.state('hide', animations_1.style({
        opacity: '0'
    })),
    animations_1.state('show', animations_1.style({
        opacity: '1'
    })),
    animations_1.transition('show => hide', animations_1.animate('500ms ease-out')),
    animations_1.transition('hide => show', animations_1.animate('500ms ease-in')),
]);
