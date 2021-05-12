import { Directive,HostBinding, HostListener} from '@angular/core';
import { Event } from '@angular/router';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

   constructor() {

    }

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggle(eventData: Event){
    this.isOpen = !this.isOpen;
  }
}
