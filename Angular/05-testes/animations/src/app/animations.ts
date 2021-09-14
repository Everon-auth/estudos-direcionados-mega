import { Component } from "@angular/core";

import {
    trigger,
    state,
    style,
    animate,
    transition
} from "@angular/animations";

export const animations = () => {
    return {

        adjwidth: (min: string, max: string, time: string) =>
            trigger('adjustWidth', [
                state('adjustWidth', style({
                    width: max
                })),
                state('back', style({
                    width: min
                })),
                transition('adjustWidth => back', animate(`${time}ms ease-out`)),
                transition('back => adjustWidth', animate(`${time}ms ease-in`))
            ]),

        fadeState: () =>
            trigger('fadeInOut', [
                state('show', style({
                    opacity: 1
                })),
                state('hide', style({
                    opacity: 0
                })),
                transition('show => hide', animate('600ms ease-out')),
                transition('hide => show', animate('1000ms ease-in'))
            ])
    };
}