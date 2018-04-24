import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appHover]' // appHover- атрибут в DOM дереве
})
export class HoverDirective{

    @HostBinding('class.hovered') isHover = false; // привязка свойства к переменной

    @HostListener('mouseenter') onmouseenter() {
        this.isHover = true;
    }

    @HostListener('mouseleave') onmouseleave() {
        this.isHover = false;
    }
}