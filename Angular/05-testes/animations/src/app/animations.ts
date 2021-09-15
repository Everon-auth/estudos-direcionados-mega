import {
    trigger,
    state,
    style,
    animate,
    transition,
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
            ]),

        girar: (rotate: string, time: string) =>
            trigger('turning', [
                state('turn180', style({
                    transform: `rotate(${rotate}deg)`
                })),
                state('back', style({
                    transform: `rotate(-${rotate}deg)`
                })),
                transition('turn180 => back', animate(`${time}ms ease-out`)),
                transition('back => turn180', animate(`${time}ms ease-in`)),
            ]),
        mover: (moved: string, time: string) =>
            trigger('moved', [
                state('moving', style({
                    transform: `translateX(${moved}px)`
                })),
                state('back', style({
                    transform: `translateX(-${moved}px)`
                })),
                transition('moving => back', animate(`${time}ms ease-out`)),
                transition('back => moving', animate(`${time}ms ease-in`)),
            ])
    };

}