import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appSettings]' // appHover- атрибут в DOM дереве
})
export class SettingsDirective{

    @HostBinding('class.settingsHovered') isHover = false; // привязка свойства к переменной

    @HostListener('mouseenter') onmouseenter() {
        this.isHover = true;
    }

    @HostListener('mouseleave') onmouseleave() {
        this.isHover = false;
    }
}